export interface AircraftSpec {
    label: string;
    value: string;
  }
  
  export interface AircraftVideo {
    title: string;
    file: string;
    poster: string;
  }
  
  export interface AircraftData {
    name: string;
    category: string;
    title: string;
    hero: string;
    description: string;
    introTitle: string;
    intro: string;
    specs: AircraftSpec[];
    heroPosition?: string;
  }