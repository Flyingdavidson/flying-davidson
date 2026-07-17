import type { ProjectData } from "@/app/types/project";

const base = "/images/projects/hsbc-svns-trophy-2023";

const images = Array.from(
  { length: 15 },
  (_, index) =>
    `${base}/bts/${String(index + 1).padStart(2, "0")}.jpg`,
);

const videos = Array.from({ length: 13 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");

  return {
    title: `Behind the Scenes ${index + 1}`,
    file: `${base}/videos/web/${number}.mp4`,
    poster: `${base}/videos/posters-web/${number}.jpg`,
  };
});

export const project: ProjectData = {
  name: "HSBC SVNS Trophy Arrival",

  category: "Red Bull Project",

  context: "Cape Town / 2023",

  title: "Trophy\nArrival.",

  hero: `${base}/bts/13.jpg`,

  heroAlt:
    "Patrick Davidson and Damian Willemse during the HSBC SVNS trophy flight",

  heroPosition: "center",

  description:
    "Patrick Davidson and Damian Willemse delivered the HSBC SVNS Cape Town trophy in unmistakable Red Bull style.",

  introEyebrow: "The Mission",

  introTitle: "From Stellenbosch\nTo Cape Town.",

  intro:
    "For the 2023 HSBC SVNS Cape Town tournament, Patrick Davidson was tasked with delivering the trophy in true Red Bull fashion. Patrick departed from Stellenbosch Flying Club with South African rugby star Damian Willemse alongside him in the GameBird. Damian's job was to keep the trophy safe while Patrick handled the flying. The flight continued towards Cape Town before passing over the rugby stadium, combining aviation, rugby and entertainment in a memorable arrival for one of the city's biggest sporting events.",

  facts: [
    {
      label: "Pilot",
      value: "Patrick Davidson",
    },
    {
      label: "Passenger",
      value: "Damian Willemse",
    },
    {
      label: "Aircraft",
      value: "GameBird GB1",
    },
    {
      label: "Route",
      value: "Stellenbosch to Cape Town",
    },
    {
      label: "Year",
      value: "2023",
    },
  ],

  tiktok: {
    title: "Arrival in Style",
    videoId: "7312112188146175265",
    url: "https://www.tiktok.com/@redbullza/video/7312112188146175265",
    username: "redbullza",
    caption:
      "Team work makes the dream work. Pat Davidson made sure the HSBC SVNS trophy arrived in style and Damian Willemse made sure it was safe.",
  },

  galleries: [
    {
      title: "Photo Gallery",
      subtitle: "Behind the Scenes · 15 Images",
      images,
    },
  ],

  videos,

  videoTitle: "Video Gallery",

  videoSubtitle: "Behind the Scenes · 13 Videos",
};