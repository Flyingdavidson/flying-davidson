import type { AircraftVideo } from "@/app/types/aircraft";

export const aircraft = {
  name: "AVGAS 100LL Fuel Bowser",
  category: "Towable Aviation Refueller",
  title: "AVGAS 100LL\nFuel Bowser.",
  hero: "/images/hangar/fuel-bowser/hero.jpg",
  heroPosition: "center 55%",

  description:
    "The Flying Davidson AVGAS 100LL fuel bowser brings safe, efficient aircraft refuelling directly to the apron.",

  introTitle: "Fuel On Hand.\nFlights On Time.",

  intro:
    "This towable AVGAS 100LL bowser is an important part of daily Flying Davidson operations. Its enclosed service bay houses the pump, filtration equipment and delivery hose, allowing the team to bring fuel to the aircraft and manage each turnaround efficiently on the apron.",

  specs: [
    {
      label: "Fuel",
      value: "AVGAS 100LL",
    },
    {
      label: "Type",
      value: "Towable Fuel Bowser",
    },
    {
      label: "Role",
      value: "Aircraft Refuelling",
    },
    {
      label: "Equipment",
      value: "Pump, Filter & Hose Reel",
    },
  ],
};

export const videos: AircraftVideo[] = [];
