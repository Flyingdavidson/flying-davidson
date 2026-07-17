import type { Metadata } from "next";

import { getGalleryImages } from "@/lib/media/getGalleryImages";

import GameBirdPageClient from "./GameBirdPageClient";

export const metadata: Metadata = {
  title: "GameBird GB1",
  description:
    "Patrick Davidson's Red Bull GameBird GB1, used for high-energy aerobatic displays and precision flying.",
};

export default function GameBirdPage() {
  const gallery = getGalleryImages("images/hangar/gamebird");

  return <GameBirdPageClient gallery={gallery} />;
}