import type { Metadata } from "next";

import { getGalleryImages } from "@/lib/media/getGalleryImages";

import AircraftPageClient from "./AircraftPageClient";
import { aircraft, videos } from "./data";

export const metadata: Metadata = {
  title: "AC TrackTech T1X2 Aircraft Tug",
  description: aircraft.description,
};

export default function TrackTechPage() {
  const gallery = getGalleryImages(
    "images/hangar/ac-tracktech-t1x2/gallery",
  );

  return (
    <AircraftPageClient
      aircraft={aircraft}
      gallery={gallery}
      videos={videos}
    />
  );
}
