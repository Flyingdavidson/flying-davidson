// Single byte ranges let Safari start playback and let all browsers seek
// without downloading the entire clip again. Never buffer a large response
// through the hosting platform's non-streaming response path.
export function videoResponse(request: Request, bytes: Buffer) {
  const size = bytes.length;
  const headers = new Headers({
    "Content-Type": "video/mp4",
    "Content-Disposition": "inline",
    "Accept-Ranges": "bytes",
    "Cache-Control": "private, no-store",
    "X-Robots-Tag": "noindex, nofollow, noarchive",
    "Referrer-Policy": "no-referrer",
  });
  let start = 0;
  let end = size - 1;
  const range = request.headers.get("range");
  if (range) {
    const match = /^bytes=(\d*)-(\d*)$/.exec(range.trim());
    const first = match?.[1] ? Number(match[1]) : undefined;
    const last = match?.[2] ? Number(match[2]) : undefined;
    if (first === undefined && last !== undefined) {
      start = Math.max(0, size - last);
    } else if (first !== undefined) {
      start = first;
      end = last === undefined ? size - 1 : Math.min(last, size - 1);
    }
    if (!match || (first === undefined && last === undefined)
      || (first !== undefined && !Number.isSafeInteger(first))
      || (last !== undefined && !Number.isSafeInteger(last))
      || start >= size || start > end || size === 0) {
      headers.set("Content-Range", `bytes */${size}`);
      return new Response(null, { status: 416, headers });
    }
    headers.set("Content-Range", `bytes ${start}-${end}/${size}`);
  }
  headers.set("Content-Length", String(end - start + 1));
  if (request.method === "HEAD") return new Response(null, { status: range ? 206 : 200, headers });
  let position = start;
  const body = new ReadableStream<Uint8Array>({
    pull(controller) {
      if (position > end) { controller.close(); return; }
      const next = Math.min(position + 64 * 1024, end + 1);
      controller.enqueue(new Uint8Array(bytes.subarray(position, next)));
      position = next;
    },
  });
  return new Response(body, { status: range ? 206 : 200, headers });
}
