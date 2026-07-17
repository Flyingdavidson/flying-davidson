import "server-only";

import fs from "node:fs";
import path from "node:path";

const supportedImageExtensions = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
]);

export function getGalleryImages(publicFolder: string): string[] {
  const cleanFolder = publicFolder.replace(/^\/+|\/+$/g, "");

  const absoluteFolder = path.join(
    process.cwd(),
    "public",
    cleanFolder
  );

  if (!fs.existsSync(absoluteFolder)) {
    console.warn(`Gallery folder does not exist: ${absoluteFolder}`);
    return [];
  }

  return fs
    .readdirSync(absoluteFolder, { withFileTypes: true })
    .filter((entry) => {
      if (!entry.isFile()) return false;
      if (entry.name.startsWith(".")) return false;

      const extension = path.extname(entry.name).toLowerCase();

      return supportedImageExtensions.has(extension);
    })
    .map((entry) => entry.name)
    .sort((a, b) =>
      a.localeCompare(b, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    )
    .map((filename) => `/${cleanFolder}/${filename}`);
}
