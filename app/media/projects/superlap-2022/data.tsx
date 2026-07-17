import type { ProjectData } from "@/app/types/project";

const base = "/images/projects/superlap-2022";

const images = Array.from(
  { length: 7 },
  (_, index) =>
    `${base}/bts/${String(index + 1).padStart(2, "0")}.jpg`,
);

const videos = Array.from({ length: 19 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");

  return {
    title: `SuperLap Behind the Scenes ${index + 1}`,
    file: `${base}/videos/web/${number}.mp4`,
    poster: `${base}/videos/posters-web/${number}.jpg`,
  };
});

export const project: ProjectData = {
  name: "Brad Binder SuperLap",

  category: "Red Bull Production",

  context: "Kyalami Grand Prix Circuit / 2022",

  title: "Super\nLap.",

  hero: `${base}/bts/03.jpg`,

  heroAlt:
    "Patrick Davidson during filming for Brad Binder SuperLap at Kyalami",

  heroPosition: "center",

  description:
    "Patrick Davidson featured in the opening sequence of Brad Binder's cinematic return to South Africa and his benchmark lap around Kyalami.",

  introEyebrow: "The Production",

  introTitle: "A South African\nMotoGP Homecoming.",

  intro:
    "SuperLap followed South African MotoGP rider Brad Binder as he returned home for a high-speed journey through Johannesburg and an attempt to establish a new benchmark lap around the Kyalami Grand Prix Circuit. Patrick Davidson appeared at the beginning of the film, piloting the aircraft used to introduce the story before the action moved onto the road and racetrack. Although Patrick's appearance was brief, the shoot brought aviation and MotoGP together inside a large-scale Red Bull production created by Iconic Agency. Brad completed the benchmark lap in 1:42.26, beating the 1:45.00 target associated with the circuit's previous premier-class motorcycle benchmark.",

  facts: [
    {
      label: "Featured Rider",
      value: "Brad Binder",
    },
    {
      label: "Plane Pilot",
      value: "Patrick Davidson",
    },
    {
      label: "Plane Co-Pilot",
      value: "Greg Ritz",
    },
    {
      label: "Production",
      value: "Iconic Agency",
    },
    {
      label: "Benchmark Lap",
      value: "1:42.26",
    },
    {
      label: "Location",
      value: "Kyalami",
    },
    {
      label: "Year",
      value: "2022",
    },
  ],

  youtube: {
    title: "Brad Binder: SuperLap",
    embedUrl: "https://www.youtube.com/embed/ZfCPNoTmoqk?rel=0",
  },

  featureLinks: [
    {
      eyebrow: "Production Credit",
      label: "SuperLap by Iconic Agency",
      href: "https://iconic.agency/work/superlap",
      buttonLabel: "View Credits",
    },
  ],

  galleries: [
    {
      title: "Photo Gallery",
      subtitle:
        "Personal Behind-the-Scenes Photography · No Official Production Stills · 7 Images",
      images,
    },
  ],

  videos,

  videoTitle: "BTS Videos",

  videoSubtitle: "On Location · 19 Videos",
};