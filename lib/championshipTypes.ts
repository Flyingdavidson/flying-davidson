export type SeasonRound = {
  number: number;
  date: string;
  chapter: string;
  headline: string;
  story: string;
  photo: string;
  photoAlt: string;
  result: string;
  qualifying: string;
  qualifyingTime: string;
  finalTime?: string;
  points: number;
  total: number;
  position: string;
  report: string;
  broadcast: string;
  broadcastLabel: string;
  official: string;
};

export type PilotSeason = {
  number: number;
  name: string;
  country: string;
  flag: string;
  team: string;
  racePoints: number[];
  qualifyingPoints: number[];
  qualifyingTimes: string[];
  qualifyingRanks: number[];
  finalRank: number;
  quarterFinal: string;
  semiFinal: string;
  final: string;
};
