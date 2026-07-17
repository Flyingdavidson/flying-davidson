import type { ProjectData } from "@/app/types/project";

const base = "/images/projects/sundowns-red-bull-2023";

const images = Array.from(
  { length: 14 },
  (_, index) =>
    `${base}/bts/${String(index + 1).padStart(2, "0")}.jpg`,
);

export const project: ProjectData = {
  name: "Mamelodi Sundowns × Red Bull",

  category: "Brand Campaign",

  context: "South Africa / 2023",

  title: "Sundowns\n× Red Bull.",

  hero: `${base}/hero.jpg`,

  heroAlt:
    "Mamelodi Sundowns and Red Bull project featuring Patrick Davidson",

  heroPosition: "center",

  description:
    "Mamelodi Sundowns and Red Bull took flight in a high-energy partnership launch featuring Patrick Davidson.",

  introEyebrow: "The Partnership",

  introTitle: "Champions\nTake Flight.",

  intro:
    "Patrick Davidson helped launch the partnership between Mamelodi Sundowns and Red Bull through an aerial production designed to match the energy, ambition and performance of both brands. The campaign brought together elite football, aviation and entertainment in a uniquely South African partnership announcement.",

  facts: [
    {
      label: "Client",
      value: "Red Bull",
    },
    {
      label: "Partner",
      value: "Mamelodi Sundowns",
    },
    {
      label: "Pilot",
      value: "Patrick Davidson",
    },
    {
      label: "Category",
      value: "Brand Campaign",
    },
    {
      label: "Year",
      value: "2023",
    },
  ],

  youtube: {
    title: "Taking Flight",
    embedUrl: "https://www.youtube.com/embed/W-XEz_F9X80?start=24&rel=0",
  },

  featureLink: {
    label: "Mamelodi Sundowns and Red Bull Take Flight",
    href: "https://sundownsfc.co.za/mamelodi-sundowns-and-red-bull-take-flight-with-new-partnership/",
  },

  galleries: [
    {
      title: "Behind the Scenes",
      subtitle: "Project Gallery · 14 Images",
      images,
    },
  ],
};