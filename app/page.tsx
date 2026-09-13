import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import MeetPatrick from "@/components/MeetPatrick";
import AirRaceX from "@/components/AirRaceX";
import ChampionEntrance from "@/components/championship/ChampionEntrance";
import { isRace4Published } from "@/lib/race4Publication";
import Aerobatics from "@/components/Aerobatics";
import Hangar from "@/components/Hangar";
import MediaCentre from "@/components/MediaCentre";
import Contact from "@/components/Contact";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: {
    absolute: "Flying Davidson | Patrick Davidson",
  },
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
      {isRace4Published() ? <ChampionEntrance /> : <AirRaceX />}
      <Aerobatics />
      <Hangar />
      <MediaCentre />
      <Contact />
    </main>
  );
}
