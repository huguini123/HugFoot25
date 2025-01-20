import { League, Club, Stadium, Manager, HistoricalEvent, TeamStyle, ManagerPersonality, StadiumTier } from '../types/game';

const createHistoricalEvent = (
  id: number,
  year: number,
  title: string,
  description: string,
  impact: any
): HistoricalEvent => ({
  id,
  year,
  title,
  description,
  impact
});

const createStadium = (
  id: number,
  name: string,
  capacity: number,
  type: StadiumTier,
  facilities: any,
  atmosphere: number,
  matchdayIncome: number
): Stadium => ({
  id,
  name,
  capacity,
  type,
  facilities,
  atmosphere,
  matchdayIncome
});

const createManager = (
  id: number,
  name: string,
  age: number,
  nationality: string,
  experience: number,
  personality: ManagerPersonality,
  preferredStyle: TeamStyle,
  reputation: number,
  achievements: string[]
): Manager => ({
  id,
  name,
  age,
  nationality,
  experience,
  personality,
  preferredStyle,
  reputation,
  ability: experience,
  achievements
});

// Eventos históricos de exemplo
const historicalEvents: HistoricalEvent[] = [
  createHistoricalEvent(
    1,
    2018,
    "Revolução Digital",
    "O clube foi comprado por um bilionário da tecnologia que implementou IA no treinamento",
    { reputation: 20, finance: 30, morale: 15 }
  ),
  createHistoricalEvent(
    2,
    2020,
    "Projeto Juventude",
    "Investimento massivo na base trouxe resultados surpreendentes",
    { reputation: 10, fanbase: 20, finance: -10 }
  ),
  createHistoricalEvent(
    3,
    2022,
    "Crise Financeira",
    "Escândalo de corrupção abalou as estruturas do clube",
    { reputation: -30, finance: -40, morale: -20 }
  ),
];

// Estádios de exemplo
const stadiums: Stadium[] = [
  createStadium(
    1,
    "Tech Arena",
    55000,
    "modern",
    {
      lighting: true,
      roofing: true,
      vipAreas: true,
      fanShop: true,
      museum: false
    },
    85,
    1200000
  ),
  createStadium(
    2,
    "Estádio Vintage",
    35000,
    "basic",
    {
      lighting: true,
      roofing: false,
      vipAreas: false,
      fanShop: true,
      museum: true
    },
    90,
    800000
  ),
];

// Managers de exemplo
const managers: Manager[] = [
  createManager(
    1,
    "Carlos Silva",
    45,
    "Brasil",
    85,
    "tactical",
    "possession",
    88,
    ["Campeão Nacional 2023", "Revelação do Ano 2020"]
  ),
  createManager(
    2,
    "John Tech",
    38,
    "Inglaterra",
    75,
    "motivator",
    "attacking",
    82,
    ["Pioneiro em Análise de Dados", "Prêmio Inovação 2024"]
  ),
];

// Clubes de exemplo
export const clubs: Club[] = [
  {
    id: 1,
    name: "São Paulo Tech FC",
    shortName: "SPTFC",
    city: "São Paulo",
    country: "Brasil",
    yearFounded: 2020,
    colors: {
      primary: "#00ff88",
      secondary: "#6c63ff"
    },
    budget: 50000000,
    reputation: 75,
    fanbase: 500000,
    stadium: stadiums[0],
    manager: managers[1],
    style: "attacking",
    history: [historicalEvents[0], historicalEvents[1]],
    rivals: [2],
    achievements: {
      leagueTitles: 1,
      cupTitles: 2,
      continentalTitles: 0
    },
    status: {
      morale: "excellent",
      financialHealth: 85,
      boardConfidence: 90,
      fanSatisfaction: 88
    }
  },
  {
    id: 2,
    name: "Vintage FC",
    shortName: "VFC",
    city: "São Paulo",
    country: "Brasil",
    yearFounded: 1925,
    colors: {
      primary: "#8B4513",
      secondary: "#FFD700"
    },
    budget: 30000000,
    reputation: 70,
    fanbase: 1200000,
    stadium: stadiums[1],
    manager: managers[0],
    style: "balanced",
    history: [historicalEvents[2]],
    rivals: [1],
    achievements: {
      leagueTitles: 8,
      cupTitles: 5,
      continentalTitles: 1
    },
    status: {
      morale: "good",
      financialHealth: 65,
      boardConfidence: 75,
      fanSatisfaction: 80
    }
  }
];

// Ligas de exemplo
export const leagues: League[] = [
  {
    id: 1,
    name: "Liga São Paulo Tech",
    country: "Brasil",
    tier: 1,
    reputation: 80,
    clubs: clubs,
    history: [historicalEvents[0]],
    prizePool: 100000000,
    continentalSpots: {
      champions: 4,
      europa: 2,
      conference: 1
    },
    specialRules: [
      "Obrigatório ter 2 jogadores sub-21 no time titular",
      "Sistema de Draft para jovens talentos"
    ],
    seasonDates: {
      start: "2025-01-15",
      end: "2025-12-15",
      transferWindows: {
        summer: { start: "2025-07-01", end: "2025-08-31" },
        winter: { start: "2025-01-01", end: "2025-01-31" }
      }
    }
  }
]; 