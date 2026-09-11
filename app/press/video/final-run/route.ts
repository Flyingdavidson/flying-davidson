import { getPressAccess } from "@/lib/press/access";
import { isPressPublished } from "@/lib/press/publication";
import { readPressFile } from "@/lib/press/storage";
import { cockpitVideo } from "@/lib/press/video";
import { videoResponse } from "@/lib/press/video-response";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 300;

async function serve(request: Request) {
  if (!isPressPublished() && !(await getPressAccess()))
    return new Response("Not available", { status: 404, headers: { "Cache-Control": "private, no-store" } });
  try { return videoResponse(request, await readPressFile(cockpitVideo.file)); }
  catch { return new Response("Video temporarily unavailable. Please contact Greg.", { status: 503, headers: { "Cache-Control": "private, no-store" } }); }
}

export const GET = serve;
export const HEAD = serve;
