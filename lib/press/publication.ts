export const PRESS_PUBLICATION_TIME = new Date("2026-09-13T15:30:00+02:00");
export const PRESS_PUBLICATION_LABEL = "Sunday 13 September 2026 at 15:30 SAST / 13:30 UTC";

export function isPressPublished(now = new Date()) {
  return now.getTime() >= PRESS_PUBLICATION_TIME.getTime();
}
