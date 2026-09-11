import { randomUUID } from "node:crypto";
import { NextResponse, after } from "next/server";
import { ACCESS_COOKIE, SOURCE_COOKIE, VISITOR_COOKIE, cookieOptions, createPressSession, isSameOrigin, verifyPressToken } from "@/lib/press/access";
import { isPressPublished, PRESS_PUBLICATION_TIME } from "@/lib/press/publication";
import { recordPressEvent, isAutomatedRequest, registerPressVisitor } from "@/lib/press/analytics";

export async function POST(request: Request) {
  if (!isSameOrigin(request)) return new Response("Forbidden", { status: 403 });
  const text = await request.text();
  if (text.length > 1024) return new Response("Invalid request", { status: 400 });
  let body;
  try { body = JSON.parse(text); } catch { return new Response("Invalid request", { status: 400 }); }
  if (!body || typeof body !== "object" || Array.isArray(body)) return new Response("Invalid request", { status: 400 });
  const access = verifyPressToken(body.token);
  if (!access) return NextResponse.json({ error: "This access link is invalid or has expired. Please contact Greg." }, { status: 401 });
  if (!isPressPublished() && body.acceptEmbargo !== true)
    return NextResponse.json({ error: "Please acknowledge the publication embargo." }, { status: 400 });
  const visitor = randomUUID();
  if (access.role === "press" && !isPressPublished()) {
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    if (name.length < 2 || name.length > 120 || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return NextResponse.json({ error: "Please enter your name and a valid email address." }, { status: 400 });
    try { await registerPressVisitor({ name, email, source: access.id, visitor, embargo: PRESS_PUBLICATION_TIME }); }
    catch { return NextResponse.json({ error: "We could not save your access details. Please try again or contact Greg." }, { status: 503 }); }
  }
  const response = NextResponse.json({ next: access.role === "admin" ? "/press/manage" : "/press" });
  response.headers.set("Cache-Control", "private, no-store");
  response.cookies.set(ACCESS_COOKIE, await createPressSession(body.token), { ...cookieOptions, maxAge: 7 * 86400 });
  response.cookies.set(VISITOR_COOKIE, visitor, { ...cookieOptions, maxAge: 30 * 86400 });
  if (access.role === "press") {
    response.cookies.set(SOURCE_COOKIE, access.id, { ...cookieOptions, maxAge: 30 * 86400 });
    if (!isPressPublished() && !isAutomatedRequest(request.headers)) after(() => recordPressEvent({
      id: randomUUID(), event: "embargo_accepted", asset: "", source: access.id, visitor, audience: "press",
    }));
  }
  return response;
}

export async function DELETE(request: Request) {
  if (!isSameOrigin(request)) return new Response("Forbidden", { status: 403 });
  const response = NextResponse.json({ ok: true });
  for (const name of [ACCESS_COOKIE, SOURCE_COOKIE, VISITOR_COOKIE])
    response.cookies.set(name, "", { ...cookieOptions, maxAge: 0 });
  return response;
}
