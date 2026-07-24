import type { AircraftData, AircraftVideo } from "@/app/types/aircraft";

export const aircraft: AircraftData = {
  name: "AC TrackTech T1X2",
  category: "Remote Aircraft Tug",
  title: "AC TrackTech\nT1X2.",
  hero: "/images/hangar/ac-tracktech-t1x2/hero.jpg",
  heroPosition: "center 55%",

  description:
    "Compact electric ground support engineered to position aircraft precisely and safely inside the Flying Davidson hangar.",

  introTitle: "Remote Control.\nPrecise Movement.",

  intro:
    "The AC TrackTech T1X2 combines an adjustable wheel cradle, wide tracked drive and remote operation in a compact electric tug. It allows the team to walk around the aircraft while it moves, monitor clearances and position the nose wheel accurately in confined hangar spaces.",

  specs: [
    {
      label: "Manufacturer",
      value: "AC AIR Technology",
    },
    {
      label: "Model",
      value: "T1X2",
    },
    {
      label: "Aircraft Capacity",
      value: "Up To 8,000 lb",
    },
    {
      label: "Drive",
      value: "Dual Electric Motors",
    },
  ],
};

export const videos: AircraftVideo[] = [
  {
    title: "T1X2 In Operation",
    file: "/videos/ac-tracktech-t1x2/operation.mp4",
    poster: "/images/hangar/ac-tracktech-t1x2/video-poster.jpg",
  },
];
