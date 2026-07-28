import type { AircraftData } from "@/app/types/aircraft";

export const aircraft: AircraftData = {
  name: "Boeing Super Stearman ZU-BED",
  category: "Historic Aerobatic Biplane",
  title: "Super Stearman\nZU-BED.",
  hero: "/images/hangar/zu-bed/gallery/10.jpg",
  heroPosition: "center center",

  description:
    "From the American airshow circuit as The Magic One to the Davidson hangar in South Africa, ZU-BED is a 450 hp Super Stearman with an extraordinary wing-walking legacy.",

  introTitle: "The Magic\nNever Left.",

  intro:
    "Before it became ZU-BED, this Super Stearman flew on the American airshow circuit as N62885. Gene Littlefield flew the aircraft while his wife, Cheryl Rae, performed from its wing-walking rig. Together, aircraft and performers became The Magic One — an act built around trust, precision and the unmistakable presence of a large radial engine.",

  specs: [
    {
      label: "Registration",
      value: "ZU-BED",
    },
    {
      label: "Aircraft",
      value: "Boeing A-75N1",
    },
    {
      label: "Engine",
      value: "Pratt & Whitney R-985",
    },
    {
      label: "Power",
      value: "450 hp",
    },
  ],
};
