import type { Metadata } from "next";
import HSBCProjectClient from "./HSBCProjectClient";

export const metadata: Metadata = {
  title: "HSBC SVNS Trophy Arrival",
  description:
    "Patrick Davidson and Damian Willemse deliver the HSBC SVNS Cape Town trophy in true Red Bull style.",
  alternates: {
    canonical: "/media/projects/hsbc-svns-trophy-2023",
  },
};

export default function HSBCSevensTrophyPage() {
  return <HSBCProjectClient />;
}