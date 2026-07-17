import type { ProjectData } from "@/app/types/project";

const base = "/images/projects/can-grab-2025";

const images = Array.from(
  { length: 19 },
  (_, index) =>
    `${base}/official/${String(index + 1).padStart(2, "0")}.jpg`,
);

export const project: ProjectData = {
  name: "Can Grab",

  category: "Red Bull Project",

  context: "South Africa / 2025",

  title: "Can\nGrab.",

  hero: `${base}/official/hero.jpg`,

  heroAlt:
    "Patrick Davidson and Brian Capper performing the Red Bull Can Grab stunt",

  description:
    "An aircraft. A motorcycle. A Red Bull can. Approximately 15 centimetres of separation.",

  introEyebrow: "The Stunt",

  introTitle: "Precision\nAt Speed.",

  intro:
    "Patrick Davidson and Brian Capper combined aerobatic flying and motorcycle stunt riding in a meticulously planned Red Bull challenge. Timing, positioning and absolute trust were everything.",

  facts: [
    {
      label: "Pilot",
      value: "Patrick Davidson",
    },
    {
      label: "Rider",
      value: "Brian Capper",
    },
    {
      label: "Aircraft",
      value: "GameBird GB1",
    },
    {
      label: "Location",
      value: "South Africa",
    },
    {
      label: "Year",
      value: "2025",
    },
  ],

  featureLinks: [
    {
      eyebrow: "Watch the Stunt",
      label: "Watch Can Grab",
      href: "https://www.instagram.com/reel/DKfCrjDNWVq/?igsh=OTF4YWVzeGx3MA==",
      buttonLabel: "Watch Reel",
    },
    {
      eyebrow: "Red Bull Story",
      label: "From World Champion to Aerial Stuntman",
      href: "https://www.redbull.com/za-en/stunt-plane-motorbike-can-grab",
      buttonLabel: "Read Full Story",
    },
  ],

  galleries: [
    {
      title: "Official Gallery",
      subtitle: "Tyrone Bradley · Red Bull Content Pool · 19 Images",
      images,
    },
  ],
};