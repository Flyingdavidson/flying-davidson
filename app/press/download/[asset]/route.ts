import { randomUUID } from "node:crypto";
import { cookies } from "next/headers";
import { NextResponse, after } from "next/server";
import { getPressAccess, SOURCE_COOKIE, VISITOR_COOKIE, normalizePressSource, cookieOptions } from "@/lib/press/access";
import { isPressPublished } from "@/lib/press/publication";
import { findPressAsset } from "@/lib/press/assets";
import { readPressFile } from "@/lib/press/storage";
import { recordPressEvent, isAutomatedRequest } from "@/lib/press/analytics";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 300;

export async function GET(request: Request, context: { params: Promise<{ asset: string }> }) {
  const access = await getPressAccess();
  if (!isPressPublished() && !access) return new Response("Not available", { status: 404, headers: { "Cache-Control": "private, no-store" } });
  const asset = findPressAsset((await context.params).asset);
  if (!asset) return new Response("Not found", { status: 404 });
  let bytes: Buffer;
  try { bytes = await readPressFile(asset.file); }
  catch { return new Response("The file is temporarily unavailable. Please contact Greg.", { status: 503 }); }
  const jar = await cookies();
  const previous = jar.get(VISITOR_COOKIE)?.value ?? "";
  const visitor = /^[0-9a-f-]{36}$/i.test(previous) ? previous : randomUUID();
  const source = access?.role === "press" ? access.id : normalizePressSource(jar.get(SOURCE_COOKIE)?.value);
  let position = 0;
  // Stream authenticated bytes in chunks, including bundles above Vercel's
  // buffered-response limit. Never redirect to an unprotected public asset.
  const stream = new ReadableStream<Uint8Array>({
    pull(controller) {
      if (position >= bytes.length) { controller.close(); return; }
      const end = Math.min(position + 64 * 1024, bytes.length);
      controller.enqueue(new Uint8Array(bytes.subarray(position, end)));
      position = end;
    },
  });
  const response = new NextResponse(stream, { headers: {
    "Content-Type": asset.type,
    "Content-Disposition": `attachment; filename="${asset.file.split("/").pop()}"`,
    "Cache-Control": "private, no-store",
    "X-Robots-Tag": "noindex, nofollow, noarchive",
    "Referrer-Policy": "no-referrer",
  } });
  response.cookies.set(VISITOR_COOKIE, visitor, { ...cookieOptions, maxAge: 30 * 86400 });
  if (request.method !== "HEAD" && access?.role !== "admin" && !isAutomatedRequest(request.headers))
    after(() => recordPressEvent({ id: randomUUID(), event: "download", asset: asset.id, source, visitor, audience: access ? "press" : "public" }));
  return response;
}
