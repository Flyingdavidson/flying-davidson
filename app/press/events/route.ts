import { randomUUID } from "node:crypto";
import { cookies } from "next/headers";
import { NextResponse, after } from "next/server";
import { getPressAccess, isSameOrigin, normalizePressSource, SOURCE_COOKIE, VISITOR_COOKIE, cookieOptions } from "@/lib/press/access";
import { isPressPublished } from "@/lib/press/publication";
import { isAutomatedRequest, recordPressEvent } from "@/lib/press/analytics";

const links = new Set(["release", "downloads", "photos", "video", "video-play", "broadcast", "email", "phone", "contact-section", "copy-release", "copy-caption", "copy-link", "biography", "emotive", "red-bull", "instagram", "facebook", "youtube", "arx"]);
const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function POST(request: Request) {
  if (!isSameOrigin(request)) return new Response("Forbidden", { status: 403 });
  const access = await getPressAccess();
  if (!isPressPublished() && !access) return new Response("Not available", { status: 403 });
  if (access?.role === "admin" || isAutomatedRequest(request.headers)) return new Response(null, { status: 204 });
  const text = await request.text();
  if (text.length > 1024) return new Response("Invalid request", { status: 400 });
  let body;
  try { body = JSON.parse(text); } catch { return new Response("Invalid request", { status: 400 }); }
  if (!body || typeof body !== "object" || Array.isArray(body)) return new Response("Invalid request", { status: 400 });
  if (!uuid.test(body.id ?? "") || !["view", "link"].includes(body.event) || (body.event === "link" && !links.has(body.asset)))
    return new Response("Invalid event", { status: 400 });
  const jar = await cookies();
  const previous = jar.get(VISITOR_COOKIE)?.value ?? "";
  const visitor = uuid.test(previous) ? previous : randomUUID();
  const source = access?.role === "press" ? access.id : normalizePressSource(body.source || jar.get(SOURCE_COOKIE)?.value);
  const response = new NextResponse(null, { status: 204 });
  response.cookies.set(VISITOR_COOKIE, visitor, { ...cookieOptions, maxAge: 30 * 86400 });
  response.cookies.set(SOURCE_COOKIE, source, { ...cookieOptions, maxAge: 30 * 86400 });
  after(() => recordPressEvent({ id: body.id, event: body.event, asset: body.event === "view" ? "" : body.asset, visitor, source, audience: access ? "press" : "public" }));
  return response;
}
