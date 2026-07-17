import type { ProjectData } from "@/app/types/project";

const base = "/images/projects/diwali-lights-2018";

const images = Array.from(
  { length: 31 },
  (_, index) =>
    `${base}/bts/${String(index + 1).padStart(2, "0")}.jpg`,
);

const videos = [
  {
    title: "Diwali Lights Display",
    file: `${base}/video/web/diwali-lights-display-web.mp4`,
    poster: `${base}/official/hero.jpg`,
  },
  {
    title: "Behind the Scenes",
    file: `${base}/video/web/diwali-lights-bts-web.mp4`,
    poster: `${base}/official/hero.jpg`,
  },
];

export const project: ProjectData = {
  name: "Diwali Festival of Lights",
  category: "Night Display",
  context: "Durban / 2018",
  title: "Diwali\nLights.",

  hero: `${base}/official/hero.jpg`,
  heroAlt:
    "Patrick Davidson performing a night aerobatic display at the Durban Diwali Festival of Lights",

  heroVideo: `${base}/video/web/diwali-lights-display-web.mp4`,
  heroVideoPoster: `${base}/official/hero.jpg`,

  description:
    "A night aerobatic display above Durban's beachfront, combining smoke, lighting and pyrotechnics.",

  introTitle: "Light. Smoke.\nNight Sky.",

  intro:
    "Patrick Davidson performed against the Durban night sky for the Diwali Festival of Lights, creating a display built around visual impact, precision and the atmosphere of one of the city's major cultural celebrations.",

  facts: [
    {
      label: "Event",
      value: "Diwali Festival of Lights",
    },
    {
      label: "Pilot",
      value: "Patrick Davidson",
    },
    {
      label: "Location",
      value: "Durban Beachfront",
    },
    {
      label: "Year",
      value: "2018",
    },
  ],

  videos,

  videoTitle: "Project Videos",
  videoSubtitle: "Durban Diwali Festival of Lights",

  galleries: [
    {
      title: "Project Gallery",
      subtitle: "Durban Diwali Festival of Lights · 2018",
      images,
    },
  ],
};