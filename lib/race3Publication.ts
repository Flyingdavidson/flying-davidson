export const RACE_3_PUBLICATION_TIME = new Date("2026-08-16T15:30:00+02:00");

export function isRace3Published(now = new Date()) {
  return (
    process.env.RACE_3_PREVIEW === "true" || now >= RACE_3_PUBLICATION_TIME
  );
}
