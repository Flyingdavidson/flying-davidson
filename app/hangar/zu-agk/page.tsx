import type { Metadata } from "next";

import { getGalleryImages } from "@/lib/media/getGalleryImages";

import AircraftPageClient from "./AircraftPageClient";
import { aircraft } from "./data";

export const metadata: Metadata = {
  title: "North American Harvard ZU-AGK",
  description: aircraft.description,
};

export default function HarvardPage() {
  const gallery = getGalleryImages("images/hangar/zu-agk/gallery");

  return (
    <AircraftPageClient
      aircraft={aircraft}
      gallery={gallery}
    />
  );
}
