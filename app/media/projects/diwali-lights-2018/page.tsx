import type { Metadata } from "next";

import DiwaliLightsClient from "./DiwaliLightsClient";

export const metadata: Metadata = {
  title: "Diwali Lights 2018",
  description:
    "Patrick Davidson lights up Durban’s beachfront with a precision night aerobatic display during the Diwali Festival of Lights.",
  openGraph: {
    title: "Diwali Lights 2018 | Flying Davidson",
    description:
      "A precision night aerobatic display over Durban’s beachfront featuring smoke, lights and pyrotechnics.",
    images: [
      {
        url: "/images/projects/diwali-lights-2018/official/hero.jpg",
        width: 1920,
        height: 1080,
        alt: "Patrick Davidson performing at the Durban Diwali Festival of Lights",
      },
    ],
  },
};

export default function DiwaliLightsPage() {
  return <DiwaliLightsClient />;
}