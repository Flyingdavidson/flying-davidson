import type { AircraftData } from "@/app/types/aircraft";

export const aircraft: AircraftData = {
  name: "North American Harvard ZU-AZX",
  category: "Historic Advanced Trainer",
  title: "Harvard\nZU-AZX.",
  hero: "/images/hangar/zu-azx/gallery/04.jpg",
  heroPosition: "center center",

  description:
    "Patrick Davidson earned his private pilot licence in ZU-AZX at just 17, before he had finished school.",

  introTitle: "Where It\nAll Began.",

  intro:
    "ZU-AZX has a defining place in Patrick Davidson's story. It is the aircraft in which he earned his private pilot licence at just 17 years old, before he had even finished school. Known as the T-6 Texan in the United States and the Harvard across the Commonwealth, the legendary two-seat trainer gave Patrick an early foundation in discipline, precision and high-performance flying.",

  specs: [
    {
      label: "Registration",
      value: "ZU-AZX",
    },
    {
      label: "Aircraft",
      value: "North American Harvard",
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
