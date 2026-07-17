import type { AircraftData } from "@/app/types/aircraft";

export const aircraft: AircraftData = {
  name: "Beechcraft Bonanza A36",
  category: "High-Performance Touring Aircraft",
  title: "Beechcraft\nBonanza A36.",
  hero: "/images/hangar/bonanza/hero.jpg",
  heroPosition: "center 50%",

  description:
    "The Beechcraft Bonanza A36 ZS-SVJ combines performance, comfort and long-distance capability in one of aviation’s most recognisable single-engine aircraft.",

  introTitle: "Built To Travel.\nReady To Work.",

  intro:
    "ZS-SVJ brings a different kind of capability to the Flying Davidson hangar. The Beechcraft Bonanza A36 is designed for efficient cross-country flying, combining a spacious cabin, dependable performance and the flexibility required for travel between events, airfields and operations across Southern Africa.",

  specs: [
    {
      label: "Aircraft",
      value: "Beechcraft Bonanza A36",
    },
    {
      label: "Registration",
      value: "ZS-SVJ",
    },
    {
      label: "Configuration",
      value: "Single-Engine Piston",
    },
    {
      label: "Role",
      value: "Touring & Utility",
    },
  ],
};