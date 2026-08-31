export type AircraftId =
  | "zu-ira"
  | "zs-joh"
  | "zu-azx"
  | "n35hh"
  | "n71pd"
  | "n540ha"
  | "zs-lhl";

export type Aircraft = {
  id: AircraftId;
  name: string;
  registration: string;
  sticker: string;
};

export type CockpitQuestion = {
  aircraftId: AircraftId;
  cockpit: string;
  choices: AircraftId[];
};

export const aircraft: Aircraft[] = [
  {
    id: "zu-ira",
    name: "Van's RV-8",
    registration: "ZU-IRA",
    sticker: "/images/arcade/cockpit-challenge/stickers/zu-ira.png",
  },
  {
    id: "zs-joh",
    name: "Cessna 340A",
    registration: "ZS-JOH",
    sticker: "/images/arcade/cockpit-challenge/stickers/zs-joh.png",
  },
  {
    id: "zu-azx",
    name: "North American Harvard",
    registration: "ZU-AZX",
    sticker: "/images/arcade/cockpit-challenge/stickers/zu-azx.png",
  },
  {
    id: "n35hh",
    name: "Waco YMF-5",
    registration: "N35HH",
    sticker: "/images/arcade/cockpit-challenge/stickers/n35hh.png",
  },
  {
    id: "n71pd",
    name: "GameBird GB1",
    registration: "N71PD",
    sticker: "/images/arcade/cockpit-challenge/stickers/n71pd.png",
  },
  {
    id: "n540ha",
    name: "Edge 540 V3",
    registration: "N540HA",
    sticker: "/images/arcade/cockpit-challenge/stickers/n540ha.png",
  },
  {
    id: "zs-lhl",
    name: "Piper PA-18 Super Cub",
    registration: "ZS-LHL",
    sticker: "/images/arcade/cockpit-challenge/stickers/zs-lhl.png",
  },
];

export const cockpitQuestions: CockpitQuestion[] = [
  {
    aircraftId: "zu-ira",
    cockpit: "/images/arcade/cockpit-challenge/cockpits/zu-ira.jpg",
    choices: ["zu-ira", "n540ha", "n71pd"],
  },
  {
    aircraftId: "zs-joh",
    cockpit: "/images/arcade/cockpit-challenge/cockpits/zs-joh.jpg",
    choices: ["zs-joh", "zu-ira", "zs-lhl"],
  },
  {
    aircraftId: "zu-azx",
    cockpit: "/images/arcade/cockpit-challenge/cockpits/zu-azx.jpg",
    choices: ["zu-azx", "n35hh", "zs-lhl"],
  },
  {
    aircraftId: "n35hh",
    cockpit: "/images/arcade/cockpit-challenge/cockpits/n35hh.jpg",
    choices: ["n35hh", "zs-lhl", "zu-azx"],
  },
  {
    aircraftId: "n71pd",
    cockpit: "/images/arcade/cockpit-challenge/cockpits/n71pd.jpg",
    choices: ["n71pd", "n540ha", "zu-ira"],
  },
  {
    aircraftId: "n540ha",
    cockpit: "/images/arcade/cockpit-challenge/cockpits/n540ha.jpg",
    choices: ["n540ha", "n71pd", "zu-ira"],
  },
  {
    aircraftId: "zs-lhl",
    cockpit: "/images/arcade/cockpit-challenge/cockpits/zs-lhl.jpg",
    choices: ["zs-lhl", "n35hh", "zs-joh"],
  },
];

export const aircraftById = Object.fromEntries(
  aircraft.map((item) => [item.id, item])
) as Record<AircraftId, Aircraft>;

export function shuffle<T>(items: T[]) {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [
      shuffled[swapIndex],
      shuffled[index],
    ];
  }

  return shuffled;
}
