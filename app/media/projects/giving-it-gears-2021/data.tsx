import type { ProjectData } from "@/app/types/project";

export const basePath = "/images/projects/giving-it-gears-2021";

export const redBullEpisodeUrl =
  "https://www.redbull.com/za-en/episodes/giving-it-gears-with-jason-goliath-s1-e1";

export const btsImages = Array.from(
  { length: 18 },
  (_, index) => `bts/${String(index + 1).padStart(2, "0")}.jpg`,
);

export const wideImageIndexes = [0, 3, 7, 11, 15];

export const project: ProjectData = {
  name: "Giving It Gears",
  category: "Red Bull TV",
  context: "Eastern Cape / 2021",
  title: "Giving It Gears\nTaking to the Skies",
  hero: `${basePath}/hero.jpg`,
  heroAlt:
    "Patrick Davidson featured in Giving It Gears with Jason Goliath",
  heroPosition: "center",
  description:
    "Jason Goliath and Nick visit Patrick Davidson to explore his aircraft collection, experience the world of aerobatic flying and challenge him to a race.",
  introEyebrow: "The Story",
  introTitle: "A Day in\nPatrick's World",
  intro:
    "In the opening episode of Red Bull's Giving It Gears, Jason Goliath and Nick travel to the Eastern Cape to meet Patrick Davidson and step inside the world of high-performance aviation. Patrick introduces them to his collection of aircraft and shares the skill, preparation and precision behind aerobatic flying. What begins as an introduction to aviation soon develops into a challenge involving speed, timing and a race against one of South Africa's leading aerobatic pilots. The episode combines humour, personality and aviation while giving viewers a closer look at Patrick, his aircraft and the environment in which he trains and performs.",
  facts: [
    { label: "Client", value: "Red Bull" },
    { label: "Series", value: "Giving It Gears" },
    { label: "Episode", value: "Season 1, Episode 1" },
    { label: "Episode Title", value: "Taking to the Skies" },
    { label: "Featuring", value: "Patrick Davidson & Jason Goliath" },
    { label: "Location", value: "Eastern Cape, South Africa" },
    { label: "Release Year", value: "2021" },
    { label: "Duration", value: "23 Minutes" },
  ],
  featureLinks: [
    {
      eyebrow: "Red Bull TV",
      label: "Watch Taking to the Skies",
      href: redBullEpisodeUrl,
      buttonLabel: "Watch Episode",
    },
  ],
  galleries: [
    {
      title: "Behind the Scenes",
      subtitle: "Giving It Gears · Eastern Cape · 18 Images",
      images: btsImages.map((image) => `${basePath}/${image}`),
    },
  ],
};

export const quote = {
  text: "Aviation is about far more than speed. It takes precision, preparation and complete commitment.",
  author: "Patrick Davidson",
};

export const relatedProjects = [
  {
    year: "2021",
    title: "Abdo Feghali\nDurban Drift",
    href: "/media/projects/abdo-feghali-2021-durban-drift",
  },
  {
    year: "2023",
    title: "Mamelodi Sundowns\nRed Bull Taking Flight",
    href: "/media/projects/sundowns-red-bull-2023",
  },
  {
    year: "2025",
    title: "Can Grab\nPrecision Stunt",
    href: "/media/projects/can-grab-2025",
  },
];
