import type { Metadata } from "next";

import { getGalleryImages } from "@/lib/media/getGalleryImages";

import AircraftPageClient from "../zu-agk/AircraftPageClient";
import { aircraft } from "./data";

export const metadata: Metadata = {
  title: "North American Harvard ZU-AZX",
  description: aircraft.description,
};

export default function HarvardZUAZXPage() {
  const gallery = getGalleryImages("images/hangar/zu-azx/gallery");

  return (
    <AircraftPageClient
      aircraft={aircraft}
      gallery={gallery}
    />
  );
}
