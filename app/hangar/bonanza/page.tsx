import type { Metadata } from "next";

import { getGalleryImages } from "@/lib/media/getGalleryImages";

import AircraftPageClient from "./AircraftPageClient";
import { aircraft } from "./data";

export const metadata: Metadata = {
  title: "Beechcraft Bonanza A36 ZS-SVJ",
  description: aircraft.description,
};

export default function BonanzaPage() {
  const gallery = getGalleryImages(
    "images/hangar/bonanza/gallery"
  );

  return (
    <AircraftPageClient
      aircraft={aircraft}
      gallery={gallery}
    />
  );
}