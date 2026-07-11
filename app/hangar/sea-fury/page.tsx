import type { Metadata } from "next";
import AircraftPageClient from "./AircraftPageClient";
import {
  aircraft,
  currentGallery,
  currentVideos,
  classicGallery,
  classicVideos,
} from "./data";

export const metadata: Metadata = {
  title: "Hawker Sea Fury",
  description: aircraft.description,
};

export default function SeaFuryPage() {
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