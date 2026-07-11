import type { Metadata } from "next";
import SuperLapProjectClient from "./SuperLapProjectClient";

const pageUrl =
  "https://flyingdavidson.com/media/projects/superlap-2022";

const socialImage =
  "/images/projects/superlap-2022/bts/01.jpg";

export const metadata: Metadata = {
  title: "Brad Binder SuperLap",

  description:
    "Behind the scenes with Patrick Davidson during the filming of Brad Binder: SuperLap, a Red Bull production at Kyalami Grand Prix Circuit.",

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title: "Brad Binder SuperLap | Patrick Davidson",
    description:
      "Patrick Davidson featured in the opening sequence of Brad Binder's cinematic Red Bull SuperLap production at Kyalami.",
    url: pageUrl,
    siteName: "Flying Davidson",
    type: "article",
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "Patrick Davidson during the Brad Binder SuperLap production",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Brad Binder SuperLap | Patrick Davidson",
    description:
      "Behind the scenes of Patrick Davidson's cameo in the Red Bull SuperLap production.",
    images: [socialImage],
  },
};

export default function SuperLapProjectPage() {
  return <SuperLapProjectClient />;
}