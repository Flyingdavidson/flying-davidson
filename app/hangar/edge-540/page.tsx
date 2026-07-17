import type { Metadata } from "next";

import { getGalleryImages } from "@/lib/media/getGalleryImages";

import Edge540PageClient from "./Edge540PageClient";

export const metadata: Metadata = {
  title: "Edge 540 V3",
  description:
    "Patrick Davidson's Edge 540 V3, the Team 77 AIR RACE X racing aircraft.",
};

export default function Edge540Page() {
  const gallery = getGalleryImages("images/edge");

  return <Edge540PageClient gallery={gallery} />;
}