import StickyNav from "@/components/StickyNav";
import ScrollProgress from "@/components/ScrollProgress";

import Hero from "@/components/Hero";
import Story from "@/components/Story";
import MeetPatrick from "@/components/MeetPatrick";
import AirRaceX from "@/components/AirRaceX";
import Aerobatics from "@/components/Aerobatics";
import Hangar from "@/components/Hangar";
import MediaCentre from "@/components/MediaCentre";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <StickyNav />
      <ScrollProgress />

      {/* Sections */}
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