import "server-only";
import photos from "./photos.json";
import { cockpitVideo } from "./video";

export { photos };
export type PressAsset = { id: string; title: string; file: string; type: string };
export const pressAssets: PressAsset[] = [
  { id: "release-pdf", title: "Press release PDF", file: "Patrick_Davidson_ARX_2026_Press_Release.pdf", type: "application/pdf" },
  { id: "release-word", title: "Press release Word", file: "Patrick_Davidson_ARX_2026_Press_Release.docx", type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" },
  { id: "release-text", title: "Press release text", file: "Press_release_copy.txt", type: "text/plain; charset=utf-8" },
  { id: "media-pack-pdf", title: "Media pack PDF", file: "Patrick_Davidson_ARX_2026_Media_Pack.pdf", type: "application/pdf" },
  { id: "complete-pack", title: "Complete media resources", file: "Patrick_Davidson_ARX_2026_Media_Resources.zip", type: "application/zip" },
  { id: "captions", title: "Photograph captions", file: "Captions_and_usage.txt", type: "text/plain; charset=utf-8" },
  cockpitVideo,
  ...photos.map((photo) => ({ id: photo.id, title: photo.title, file: photo.file, type: "image/jpeg" })),
];

export function findPressAsset(id: string) {
  return pressAssets.find((asset) => asset.id === id);
}
