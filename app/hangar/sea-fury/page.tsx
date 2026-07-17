import type { Metadata } from "next";

import { getGalleryImages } from "@/lib/media/getGalleryImages";

import AircraftPageClient from "./AircraftPageClient";
import {
  aircraft,
  currentVideos,
  classicVideos,
} from "./data";

export const metadata: Metadata = {
  title: "Hawker Sea Fury",
  description: aircraft.description,
};

export default function SeaFuryPage() {
  const currentGallery = getGalleryImages(
    "images/hangar/sea-fury/current"
  );

  const classicGallery = getGalleryImages(
    "images/hangar/sea-fury/classic"
  );

  return (
    <AircraftPageClient
      aircraft={aircraft}
      currentGallery={currentGallery}
      currentVideos={currentVideos}
      classicGallery={classicGallery}
      classicVideos={classicVideos}
    />
  );
}