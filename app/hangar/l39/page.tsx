import type { Metadata } from "next";

import { getGalleryImages } from "@/lib/media/getGalleryImages";

import AircraftPageClient from "./AircraftPageClient";
import { aircraft, videos } from "./data";

export const metadata: Metadata = {
  title: "Aero L-39 Albatros",
  description: aircraft.description,
};

export default function L39Page() {
  const gallery = getGalleryImages("images/hangar/l39/gallery");

  return (
    <AircraftPageClient
      aircraft={aircraft}
      gallery={gallery}
      videos={videos}
    />
  );
}