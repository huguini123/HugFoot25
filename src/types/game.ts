export type TeamStyle = 'attacking' | 'defensive' | 'balanced' | 'possession' | 'counter';
export type StadiumTier = 'basic' | 'modern' | 'elite' | 'legendary';
export type TeamMood = "excellent" | "good" | "normal" | "bad" | "terrible" | "improving";
export type ManagerPersonality = 'friendly' | 'aggressive' | 'tactical' | 'motivator' | 'pragmatic';

export interface HistoricalEvent {
  id: number;
  year: number;
  title: string;
  description: string;
  impact: {
    reputation?: number;
    fanbase?: number;
    finance?: number;
    morale?: number;
  };
}

export interface Stadium {
  id: number;
  name: string;
  capacity: number;
  type: StadiumTier;
  facilities: {
    lighting: boolean;
    roofing: boolean;
    vipAreas: boolean;
    fanShop: boolean;
    museum: boolean;
    trainingFacilities?: boolean;
  };
  atmosphere: number;
  matchdayIncome: number;
}

export interface Manager {
  id: number;
  name: string;
  age: number;
  nationality: string;
  experience: number;
  personality: ManagerPersonality;
  preferredStyle: TeamStyle;
  reputation: number;
  ability: number;
  achievements?: string[];
}

export interface Club {
  id: number;
  name: string;
  shortName: string;
  city: string;
  country: string;
  yearFounded: number;
  colors: {
    primary: string;
    secondary: string;
  };
  budget: number;
  reputation: number; // 0-100
  fanbase: number;
  stadium: Stadium;
  manager: Manager;
  style: TeamStyle;
  history: HistoricalEvent[];
  rivals: number[]; // IDs dos clubes rivais
  achievements: {
    leagueTitles: number;
    cupTitles: number;
    continentalTitles: number;
  };
  status: {
    morale: TeamMood;
    financialHealth: number; // 0-100
    boardConfidence: number; // 0-100
    fanSatisfaction: number; // 0-100
  };
}

export interface League {
  id: number;
  name: string;
  country: string;
  tier: number;
  reputation: number; // 0-100
  clubs: Club[];
  history: HistoricalEvent[];
  prizePool: number;
  continentalSpots: {
    champions: number;
    europa: number;
    conference: number;
  };
  specialRules?: string[];
  seasonDates: {
    start: string;
    end: string;
    transferWindows: {
      summer: { start: string; end: string };
      winter: { start: string; end: string };
    };
  };
} 