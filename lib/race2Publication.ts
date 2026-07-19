export const RACE_2_PUBLICATION_TIME = new Date("2026-07-19T15:30:00+02:00");

export function isRace2Published(now = new Date()) {
  return now >= RACE_2_PUBLICATION_TIME;
}
