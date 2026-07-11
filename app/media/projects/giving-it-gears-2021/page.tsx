import type { Metadata } from "next";
import GivingItGearsClient from "./GivingItGearsClient";

const basePath = "/images/projects/giving-it-gears-2021";

export const metadata: Metadata = {
  title: "Giving It Gears with Patrick Davidson",
  description:
    "Jason Goliath and Nick visit Patrick Davidson in the Eastern Cape to explore his aircraft collection, discover aerobatic flying and challenge him to a race.",
  alternates: {
    canonical: "/media/projects/giving-it-gears-2021",
  },
  openGraph: {
    title: "Giving It Gears with Patrick Davidson",
    description:
      "Taking to the Skies — Patrick Davidson featured in Season 1, Episode 1 of Red Bull's Giving It Gears.",
    url: "/media/projects/giving-it-gears-2021",
    type: "article",
    images: [
      {
        url: `${basePath}/hero.jpg`,
        width: 1600,
        height: 1000,
        alt: "Patrick Davidson featured in Giving It Gears",
      },
    ],
  },
};

export default function GivingItGears2021Page() {
  return <GivingItGearsClient />;
}