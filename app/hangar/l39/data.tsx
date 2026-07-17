import type { AircraftVideo } from "@/app/types/aircraft";

export const aircraft = {
    name: "Aero L-39 Albatros",
    category: "Military Jet Trainer",
    title: "Aero L-39\nAlbatros.",
    hero: "/images/hangar/l39/l39-hero.jpg",
    heroPosition: "center 35%",
  
    description:
      "Military heritage, graceful handling and unmistakable jet performance. The Aero L-39 Albatros brings a completely different kind of speed, sound and presence to the Flying Davidson hangar.",

  introTitle: "Jet Power.\nPure Presence.",

  intro:
    "Developed as an advanced military trainer, the Aero L-39 Albatros became one of the world's most recognisable jet aircraft. It combines predictable handling with genuine jet performance, elegant lines and a commanding presence in the air. In Patrick Davidson's hands, the L-39 represents another side of precision flying: smooth energy management, disciplined lines and the speed and sound that only a jet can deliver.",

  specs: [
    {
      label: "Pilot",
      value: "Patrick Davidson",
    },
    {
      label: "Aircraft",
      value: "Aero L-39 Albatros",
    },
    {
      label: "Type",
      value: "Military Jet Trainer",
    },
    {
      label: "Engine",
      value: "Ivchenko AI-25TL",
    },
  ],
};


export const videos: AircraftVideo[] = [
  {
    title: "L-39 Flight",
    file: "/images/hangar/l39/video/IMG_1641-1080-web.mp4",
    poster: "/images/hangar/l39/l39-hero.jpg",
  },
  {
    title: "Jet Operations",
    file: "/images/hangar/l39/video/IMG_4275-1080-web-v2.mp4",
    poster: "/images/hangar/l39/l39-hero.jpg",
  },
  {
    title: "L-39 Close-Up",
    file: "/images/hangar/l39/video/IMG_7786-web.mp4",
    poster: "/images/hangar/l39/l39-hero.jpg",
  },
];