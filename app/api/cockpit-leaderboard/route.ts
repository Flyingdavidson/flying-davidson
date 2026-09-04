import { neon, type NeonQueryFunction } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

type CockpitScoreRow = {
  id: number;
  name: string;
  score: number;
  duration_ms: number;
  created_at: string;
};

function getDatabase() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not configured.");
  }

  return neon(databaseUrl);
}

function cleanName(value: unknown) {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .trim()
    .replace(/\s+/g, " ")
    .replace(/[^a-zA-Z0-9 À-ÿ'_-]/g, "")
    .slice(0, 20);
}

async function ensureTable(sql: NeonQueryFunction<false, false>) {
  await sql`
    CREATE TABLE IF NOT EXISTS cockpit_leaderboard (
      id SERIAL PRIMARY KEY,
      name VARCHAR(20) NOT NULL,
      score INTEGER NOT NULL CHECK (score >= 0 AND score <= 7),
      duration_ms INTEGER NOT NULL CHECK (
        duration_ms >= 1000 AND duration_ms <= 3600000
      ),
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;

  await sql`
    CREATE INDEX IF NOT EXISTS cockpit_leaderboard_ranking_idx
    ON cockpit_leaderboard (score DESC, duration_ms ASC, created_at ASC)
  `;
}

async function getLeaderboard(sql: NeonQueryFunction<false, false>) {
  const scores = await sql`
    SELECT id, name, score, duration_ms, created_at
    FROM (
      SELECT id, name, score, duration_ms, created_at,
        ROW_NUMBER() OVER (
          PARTITION BY LOWER(TRIM(REGEXP_REPLACE(name, '[[:space:]]+', ' ', 'g')))
          ORDER BY score DESC, duration_ms ASC, created_at ASC, id ASC
        ) AS player_rank
      FROM cockpit_leaderboard
    ) AS personal_bests
    WHERE player_rank = 1
    ORDER BY score DESC, duration_ms ASC, created_at ASC, id ASC
    LIMIT 10
  `;

  return scores as CockpitScoreRow[];
}

export async function GET() {
  try {
    const sql = getDatabase();
    await ensureTable(sql);

    return NextResponse.json({ scores: await getLeaderboard(sql) });
  } catch (error) {
    console.error("Cockpit leaderboard GET error:", error);

    return NextResponse.json(
      { error: "Unable to load the cockpit leaderboard." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: unknown;
      score?: unknown;
      durationMs?: unknown;
    };

    const name = cleanName(body.name);
    const score = Number(body.score);
    const durationMs = Math.round(Number(body.durationMs));

    if (name.length < 2) {
      return NextResponse.json(
        { error: "Please enter at least two characters." },
        { status: 400 }
      );
    }

    if (!Number.isInteger(score) || score < 0 || score > 7) {
      return NextResponse.json(
        { error: "That score is not valid." },
        { status: 400 }
      );
    }

    if (
      !Number.isInteger(durationMs) ||
      durationMs < 1000 ||
      durationMs > 3_600_000
    ) {
      return NextResponse.json(
        { error: "That completion time is not valid." },
        { status: 400 }
      );
    }

    const sql = getDatabase();
    await ensureTable(sql);

    const inserted = (await sql`
      INSERT INTO cockpit_leaderboard (name, score, duration_ms)
      VALUES (${name}, ${score}, ${durationMs})
      RETURNING id
    `) as Array<{ id: number }>;

    return NextResponse.json(
      {
        success: true,
        entryId: inserted[0]?.id,
        scores: await getLeaderboard(sql),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Cockpit leaderboard POST error:", error);

    return NextResponse.json(
      { error: "Unable to save your cockpit score." },
      { status: 500 }
    );
  }
}
