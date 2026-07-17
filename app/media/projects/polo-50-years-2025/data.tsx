import type { ProjectData } from "@/app/types/project";

const base = "/images/projects/polo-50-years-2025";

const videos = Array.from({ length: 4 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");

  return {
    title: `Behind the Scenes ${index + 1}`,
    file: `${base}/videos/web/${number}.mp4`,
    poster: `${base}/videos/posters-web/${number}.jpg`,
  };
});

export const project: ProjectData = {
  name: "50 Years of Polo",

  category: "Volkswagen Project",

  context: "Nelson Mandela Bay / 2025",

  title: "50 Years\nof Polo.",

  hero: `${base}/hero.jpg`,

  heroAlt: "Volkswagen 50 Years of Polo project filming",

  description:
    "A spectacular celebration of five decades of the Volkswagen Polo, filmed at Plant Kariega and across Nelson Mandela Bay.",

  introTitle: "Five Decades.\nOne Icon.",

  intro:
    "Patrick Davidson joined a precision production built around Volkswagen's 50-year Polo milestone, bringing aviation energy and cinematic scale to the campaign.",

  facts: [
    {
      label: "Client",
      value: "Volkswagen",
    },
    {
      label: "Campaign",
      value: "Project Drift",
    },
    {
      label: "Driver",
      value: "Johan Kristoffersson",
    },
    {
      label: "Year",
      value: "2025",
    },
  ],

  youtube: {
    title: "Watch the Film",
    embedUrl: "https://www.youtube.com/embed/X2LEgSHl_N4?start=250&rel=0",
  },

  videos,

  videoTitle: "Behind the Scenes",

  videoSubtitle: "50 Years of Polo",

  featureLink: {
    label: "Read the Volkswagen feature",
    href: "https://www.vw.co.za/en/volkswagen-experience/newsroom/plant-kariega-shines-in-spectacular-video-celebrating-50-years-of-polo.html",
  },
};