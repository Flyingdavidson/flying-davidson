import type { AircraftVideo } from "@/app/types/aircraft";

export const aircraft = {
  name: "Clark CTA 50",
  category: "Aircraft Tow Tractor",
  title: "Clark CTA 50\nTow Tractor.",
  hero: "/images/hangar/clark-tug/hero.jpg",
  heroPosition: "center 55%",

  description:
    "The dependable workhorse of the Flying Davidson hangar. The Clark CTA 50 is used every day to safely position aircraft before and after flight.",

  introTitle: "Ground Power.\nDaily Duty.",

  intro:
    "The Clark CTA 50 is part of the machinery that keeps the Flying Davidson operation moving. Compact, dependable and designed for controlled towing, it allows the team to position aircraft safely around the hangar and apron. From preparing an aircraft for flight to returning it to the hangar at the end of the day, the Clark is always close at hand.",

  specs: [
    {
      label: "Operator",
      value: "Team 77",
    },
    {
      label: "Machine",
      value: "Clark CTA 50",
    },
    {
      label: "Type",
      value: "Aircraft Tow Tractor",
    },
    {
      label: "Role",
      value: "Ground Support",
    },
  ],
};

export const videos: AircraftVideo[] = [];