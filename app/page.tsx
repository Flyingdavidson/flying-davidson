import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import MeetPatrick from "@/components/MeetPatrick";
import AirRaceX from "@/components/AirRaceX";
import Aerobatics from "@/components/Aerobatics";
import Hangar from "@/components/Hangar";
import MediaCentre from "@/components/MediaCentre";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main
      className="overflow-x-hidden bg-black text-white"
    >
      <div id="top" />
      <Hero />
      <Story />
      <MeetPatrick />
      <AirRaceX />
      <Aerobatics />
      <Hangar />
      <MediaCentre />
      <Contact />
    </main>
  );
}
