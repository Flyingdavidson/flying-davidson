import type { AircraftData } from "@/app/types/aircraft";

export const aircraft: AircraftData = {
  name: "North American Harvard Mk III",
  category: "Historic Advanced Trainer",
  title: "North American\nHarvard.",
  hero: "/images/hangar/zu-agk/hero.jpg",
  heroPosition: "center center",

  description:
    "ZU-AGK brings the unmistakable sound, presence and history of the North American Harvard to the Flying Davidson hangar.",

  introTitle: "Built To Train.\nStill Built To Inspire.",

  intro:
    "Known as the T-6 Texan in the United States and the Harvard across the Commonwealth, this legendary two-seat advanced trainer prepared generations of military pilots for high-performance flying. ZU-AGK carries former South African Air Force serial 7544 and keeps that training heritage alive through the sound and character of its radial engine.",

  specs: [
    {
      label: "Registration",
      value: "ZU-AGK",
    },
    {
      label: "Aircraft",
      value: "Harvard Mk III",
    },
    {
      label: "Engine",
      value: "Pratt & Whitney R-1340",
    },
    {
      label: "Power",
      value: "600 hp",
    },
  ],
};
