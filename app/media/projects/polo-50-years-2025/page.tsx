import type { Metadata } from "next";
import Polo50ProjectClient from "./Polo50ProjectClient";

export const metadata: Metadata = {
  title: "Volkswagen 50 Years of Polo",
  description:
    "Behind the scenes of Volkswagen's 50 Years of Polo: Project Drift, filmed at Plant Kariega and around Nelson Mandela Bay.",
  alternates: {
    canonical: "/media/projects/polo-50-years-2025",
  },
};

export default function Polo50YearsPage() {
  return <Polo50ProjectClient />;
}