import { getPressAccess } from "@/lib/press/access";
import { isPressPublished } from "@/lib/press/publication";
import { photos } from "@/lib/press/assets";
import { readPressFile } from "@/lib/press/storage";

export const dynamic = "force-dynamic";

export async function GET(_request: Request, context: { params: Promise<{ image: string }> }) {
  if (!isPressPublished() && !(await getPressAccess()))
    return new Response("Not available", { status: 404, headers: { "Cache-Control": "private, no-store" } });
  const id = (await context.params).image;
  const photo = photos.find((item) => item.id === id);
  if (!photo) return new Response("Not found", { status: 404 });
  try {
    const data = await readPressFile(photo.preview);
    return new Response(new Uint8Array(data), { headers: {
      "Content-Type": "image/webp",
      "Cache-Control": "private, no-store",
      "X-Robots-Tag": "noindex, noarchive",
    } });
  } catch { return new Response("Image unavailable", { status: 503 }); }
}
