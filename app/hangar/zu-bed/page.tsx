import type { Metadata } from "next";

import { getGalleryImages } from "@/lib/media/getGalleryImages";

import AircraftPageClient from "./AircraftPageClient";
import { aircraft } from "./data";

export const metadata: Metadata = {
  title: "Boeing Super Stearman ZU-BED",
  description: aircraft.description,
};

export default function SuperStearmanPage() {
  const gallery = getGalleryImages("images/hangar/zu-bed/gallery");

  return <AircraftPageClient aircraft={aircraft} gallery={gallery} />;
}
