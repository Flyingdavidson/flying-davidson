import type { Metadata } from "next";

import { getGalleryImages } from "@/lib/media/getGalleryImages";

import AircraftPageClient from "./AircraftPageClient";
import { aircraft, videos } from "./data";

export const metadata: Metadata = {
  title: "Clark CTA 50 Aircraft Tow Tractor",
  description: aircraft.description,
};

export default function ClarkTugPage() {
  const gallery = getGalleryImages(
    "images/hangar/clark-tug/gallery",
  );

  return (
    <AircraftPageClient
      aircraft={aircraft}
      gallery={gallery}
      videos={videos}
    />
  );
}