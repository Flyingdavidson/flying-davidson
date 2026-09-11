import "server-only";
import { neon } from "@neondatabase/serverless";

export type PressEvent = {
  id: string;
  event: "view" | "link" | "download" | "embargo_accepted";
  asset: string;
  source: string;
  visitor: string;
  audience: "public" | "press";
};

let schemaReady: Promise<void> | undefined;
function database() {
  if (!process.env.DATABASE_URL) throw new Error("Press analytics is not configured.");
  return neon(process.env.DATABASE_URL);
}

async function ensureSchema() {
  if (!schemaReady) {
    schemaReady = (async () => {
      const sql = database();
      await sql`CREATE TABLE IF NOT EXISTS press_events (
        id UUID PRIMARY KEY,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        event VARCHAR(24) NOT NULL,
        asset VARCHAR(64) NOT NULL DEFAULT '',
        source VARCHAR(100) NOT NULL,
        visitor UUID NOT NULL,
        audience VARCHAR(12) NOT NULL
      )`;
      await sql`CREATE INDEX IF NOT EXISTS press_events_created_at_idx ON press_events (created_at)`;
      await sql`CREATE TABLE IF NOT EXISTS press_registrations (
        id UUID PRIMARY KEY,
        name VARCHAR(120) NOT NULL,
        email VARCHAR(254) NOT NULL,
        source VARCHAR(100) NOT NULL,
        visitor UUID NOT NULL,
        accepted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        embargo_until TIMESTAMPTZ NOT NULL
      )`;
    })().catch((error) => { schemaReady = undefined; throw error; });
  }
  await schemaReady;
}

export function isAutomatedRequest(headers: Headers) {
  return /bot|spider|crawler|headless|preview|facebookexternalhit|slack|whatsapp|curl|wget/i.test(headers.get("user-agent") ?? "")
    || /prefetch/i.test(headers.get("purpose") ?? headers.get("sec-purpose") ?? "");
}

export async function recordPressEvent(event: PressEvent) {
  if (process.env.PRESS_ANALYTICS_DISABLED === "true") return;
  try {
    await ensureSchema();
    const sql = database();
    await sql`INSERT INTO press_events (id, event, asset, source, visitor, audience)
      VALUES (${event.id}::uuid, ${event.event}, ${event.asset}, ${event.source}, ${event.visitor}::uuid, ${event.audience})
      ON CONFLICT (id) DO NOTHING`;
  } catch {
    // A reporting outage must not prevent a journalist receiving the materials.
    console.warn("Unable to record press activity.");
  }
}

export async function getPressStats() {
  await ensureSchema();
  const sql = database();
  const [sources, assets, totals, registrations] = await Promise.all([
    sql`SELECT source,
      COUNT(*) FILTER (WHERE event = 'view')::int AS views,
      COUNT(DISTINCT visitor) FILTER (WHERE event = 'view')::int AS visitors,
      COUNT(*) FILTER (WHERE event = 'download')::int AS downloads,
      COUNT(*) FILTER (WHERE event = 'link' AND asset IN ('email', 'phone'))::int AS contact_clicks,
      MAX(created_at) AS last_activity
      FROM press_events GROUP BY source ORDER BY views DESC, downloads DESC`,
    sql`SELECT asset, COUNT(*)::int AS downloads FROM press_events
      WHERE event = 'download' GROUP BY asset ORDER BY downloads DESC`,
    sql`SELECT COUNT(*) FILTER (WHERE event = 'view')::int AS views,
      COUNT(*) FILTER (WHERE event = 'link' AND asset = 'video-play')::int AS video_plays,
      COUNT(DISTINCT visitor) FILTER (WHERE event = 'view')::int AS visitors,
      COUNT(*) FILTER (WHERE event = 'download')::int AS downloads,
      COUNT(*) FILTER (WHERE event = 'link' AND asset IN ('email', 'phone'))::int AS contact_clicks
      FROM press_events`,
    sql`SELECT r.name, r.email, r.source, r.accepted_at,
      COUNT(e.id) FILTER (WHERE e.event = 'view')::int AS views,
      COUNT(e.id) FILTER (WHERE e.event = 'download')::int AS downloads
      FROM press_registrations r LEFT JOIN press_events e ON e.visitor = r.visitor
      GROUP BY r.id ORDER BY r.accepted_at DESC LIMIT 500`,
  ]);
  return { sources, assets, totals: totals[0], registrations };
}

export async function registerPressVisitor(input: { name: string; email: string; source: string; visitor: string; embargo: Date }) {
  await ensureSchema();
  const sql = database();
  await sql`INSERT INTO press_registrations (id, name, email, source, visitor, embargo_until)
    VALUES (${crypto.randomUUID()}::uuid, ${input.name}, ${input.email}, ${input.source}, ${input.visitor}::uuid, ${input.embargo.toISOString()}::timestamptz)`;
}
