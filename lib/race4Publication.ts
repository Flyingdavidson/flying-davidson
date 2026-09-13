export const RACE_4_PUBLICATION_TIME = new Date("2026-09-13T15:30:00+02:00");
export const RACE_4_BROADCAST_URL = "https://youtu.be/7y9WSJeDzEw";

// Local previews must never bypass the embargo on a Vercel deployment.
export function isRace4Preview() {
  return process.env.NODE_ENV === "development" &&
    !process.env.VERCEL && process.env.RACE_4_PREVIEW === "true";
}

export function isRace4Published(now = new Date()) {
  return isRace4Preview() || now >= RACE_4_PUBLICATION_TIME;
}
