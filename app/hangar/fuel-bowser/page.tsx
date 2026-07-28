import type { Metadata } from "next";

import { getGalleryImages } from "@/lib/media/getGalleryImages";

import AircraftPageClient from "./AircraftPageClient";
import { aircraft, videos } from "./data";

export const metadata: Metadata = {
  title: "AVGAS 100LL Fuel Bowser",
  description: aircraft.description,
};

export default function FuelBowserPage() {
  const gallery = getGalleryImages(
    "images/hangar/fuel-bowser/gallery",
  );

  return (
    <AircraftPageClient
      aircraft={aircraft}
      gallery={gallery}
      videos={videos}
    />
  );
}
