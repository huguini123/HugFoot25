import { League, Club, Stadium, Manager, HistoricalEvent, TeamStyle, ManagerPersonality, StadiumTier } from '../types/game';

// Funções auxiliares para criar objetos
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

// Premier League
const premierLeagueStadiums = [
  createStadium(
    1,
    "Old Trafford",
    74140,
    "legendary",
    {
      lighting: true,
      roofing: true,
      vipAreas: true,
      fanShop: true,
      museum: true
    },
    95,
    3000000
  ),
  createStadium(
    2,
    "Anfield",
    53394,
    "legendary",
    {
      lighting: true,
      roofing: true,
      vipAreas: true,
      fanShop: true,
      museum: true
    },
    98,
    2500000
  ),
  // Adicione mais estádios aqui
];

const premierLeagueManagers = [
  createManager(
    1,
    "Erik ten Hag",
    53,
    "Holanda",
    85,
    "tactical",
    "possession",
    88,
    ["Campeão da Eredivisie 2022", "Semifinalista Champions League 2019"]
  ),
  createManager(
    2,
    "Jürgen Klopp",
    56,
    "Alemanha",
    95,
    "motivator",
    "attacking",
    95,
    ["Campeão Premier League 2020", "Campeão Champions League 2019"]
  ),
  // Adicione mais managers aqui
];

const premierLeagueClubs: Club[] = [
  {
    id: 1,
    name: "Arsenal",
    shortName: "ARS",
    city: "Londres",
    country: "Inglaterra",
    yearFounded: 1886,
    colors: {
      primary: "#EF0107",
      secondary: "#FFFFFF"
    },
    budget: 450000000,
    reputation: 90,
    fanbase: 750000000,
    stadium: premierLeagueStadiums[0],
    manager: premierLeagueManagers[0],
    style: "possession",
    history: [
      createHistoricalEvent(
        1,
        2004,
        "Os Invencíveis",
        "Temporada histórica sem derrotas na Premier League",
        { reputation: 40, fanbase: 30, finance: 25 }
      )
    ],
    rivals: [2, 3],
    achievements: {
      leagueTitles: 13,
      cupTitles: 14,
      continentalTitles: 0
    },
    status: {
      morale: "excellent",
      financialHealth: 90,
      boardConfidence: 95,
      fanSatisfaction: 90
    }
  },
  {
    id: 2,
    name: "Manchester City",
    shortName: "MCI",
    city: "Manchester",
    country: "Inglaterra",
    yearFounded: 1880,
    colors: {
      primary: "#6CABDD",
      secondary: "#FFFFFF"
    },
    budget: 550000000,
    reputation: 92,
    fanbase: 650000000,
    stadium: premierLeagueStadiums[1],
    manager: premierLeagueManagers[1],
    style: "possession",
    history: [
      createHistoricalEvent(
        2,
        2023,
        "Tríplice Coroa",
        "Conquista histórica da Premier League, FA Cup e Champions League",
        { reputation: 45, fanbase: 35, finance: 40 }
      )
    ],
    rivals: [3],
    achievements: {
      leagueTitles: 9,
      cupTitles: 7,
      continentalTitles: 1
    },
    status: {
      morale: "excellent",
      financialHealth: 100,
      boardConfidence: 100,
      fanSatisfaction: 95
    }
  },
  {
    id: 3,
    name: "Liverpool",
    shortName: "LIV",
    city: "Liverpool",
    country: "Inglaterra",
    yearFounded: 1892,
    colors: {
      primary: "#C8102E",
      secondary: "#F6EB61"
    },
    budget: 400000000,
    reputation: 91,
    fanbase: 800000000,
    stadium: premierLeagueStadiums[2],
    manager: premierLeagueManagers[2],
    style: "attacking",
    history: [
      createHistoricalEvent(
        3,
        2020,
        "Fim do Jejum",
        "Conquista da Premier League após 30 anos",
        { reputation: 35, fanbase: 30, finance: 30 }
      )
    ],
    rivals: [4],
    achievements: {
      leagueTitles: 19,
      cupTitles: 8,
      continentalTitles: 6
    },
    status: {
      morale: "good",
      financialHealth: 85,
      boardConfidence: 90,
      fanSatisfaction: 85
    }
  },
  {
    id: 4,
    name: "Manchester United",
    shortName: "MUN",
    city: "Manchester",
    country: "Inglaterra",
    yearFounded: 1878,
    colors: {
      primary: "#DA291C",
      secondary: "#FBE122"
    },
    budget: 450000000,
    reputation: 89,
    fanbase: 1100000000,
    stadium: premierLeagueStadiums[3],
    manager: premierLeagueManagers[3],
    style: "balanced",
    history: [
      createHistoricalEvent(
        4,
        1999,
        "Tríplice Coroa",
        "Conquista histórica da Premier League, FA Cup e Champions League",
        { reputation: 40, fanbase: 35, finance: 35 }
      )
    ],
    rivals: [2, 3],
    achievements: {
      leagueTitles: 20,
      cupTitles: 12,
      continentalTitles: 3
    },
    status: {
      morale: "normal",
      financialHealth: 80,
      boardConfidence: 75,
      fanSatisfaction: 70
    }
  },
  {
    id: 5,
    name: "Tottenham Hotspur",
    shortName: "TOT",
    city: "Londres",
    country: "Inglaterra",
    yearFounded: 1882,
    colors: {
      primary: "#132257",
      secondary: "#FFFFFF"
    },
    budget: 350000000,
    reputation: 85,
    fanbase: 450000000,
    stadium: createStadium(
      5,
      "Tottenham Hotspur Stadium",
      62850,
      "modern",
      {
        lighting: true,
        roofing: true,
        vipAreas: true,
        fanShop: true,
        museum: true
      },
      95,
      2000000
    ),
    manager: createManager(
      5,
      "Ange Postecoglou",
      58,
      "Austrália",
      82,
      "tactical",
      "attacking",
      85,
      ["Campeão Escocês com Celtic", "Revolucionando o estilo de jogo do Tottenham"]
    ),
    style: "attacking",
    history: [
      createHistoricalEvent(
        5,
        2019,
        "Final da Champions",
        "Primeira final de Champions League da história do clube",
        { reputation: 25, fanbase: 20, finance: 30 }
      )
    ],
    rivals: [1, 6],
    achievements: {
      leagueTitles: 2,
      cupTitles: 8,
      continentalTitles: 2
    },
    status: {
      morale: "good",
      financialHealth: 85,
      boardConfidence: 90,
      fanSatisfaction: 85
    }
  },
  {
    id: 6,
    name: "Chelsea",
    shortName: "CHE",
    city: "Londres",
    country: "Inglaterra",
    yearFounded: 1905,
    colors: {
      primary: "#034694",
      secondary: "#FFFFFF"
    },
    budget: 400000000,
    reputation: 86,
    fanbase: 500000000,
    stadium: createStadium(
      6,
      "Stamford Bridge",
      40341,
      "legendary",
      {
        lighting: true,
        roofing: true,
        vipAreas: true,
        fanShop: true,
        museum: true
      },
      90,
      1800000
    ),
    manager: createManager(
      6,
      "Mauricio Pochettino",
      51,
      "Argentina",
      85,
      "tactical",
      "possession",
      88,
      ["Projeto de reconstrução do Chelsea", "Ex-técnico do Tottenham e PSG"]
    ),
    style: "possession",
    history: [
      createHistoricalEvent(
        6,
        2021,
        "Champions League",
        "Segunda conquista da Champions League",
        { reputation: 30, fanbase: 25, finance: 35 }
      )
    ],
    rivals: [1, 5],
    achievements: {
      leagueTitles: 6,
      cupTitles: 8,
      continentalTitles: 2
    },
    status: {
      morale: "normal",
      financialHealth: 90,
      boardConfidence: 75,
      fanSatisfaction: 70
    }
  }
];

// La Liga
const laLigaStadiums = [
  createStadium(
    3,
    "Santiago Bernabéu",
    81044,
    "legendary",
    {
      lighting: true,
      roofing: true,
      vipAreas: true,
      fanShop: true,
      museum: true
    },
    96,
    3500000
  ),
  createStadium(
    4,
    "Camp Nou",
    99354,
    "legendary",
    {
      lighting: true,
      roofing: true,
      vipAreas: true,
      fanShop: true,
      museum: true
    },
    97,
    4000000
  ),
  // Adicione mais estádios aqui
];

const laLigaManagers = [
  createManager(
    3,
    "Carlo Ancelotti",
    64,
    "Itália",
    98,
    "tactical",
    "balanced",
    96,
    ["Campeão Champions League 2022", "Campeão La Liga 2022"]
  ),
  createManager(
    4,
    "Xavi",
    43,
    "Espanha",
    82,
    "tactical",
    "possession",
    85,
    ["Campeão La Liga 2023", "Lenda do Barcelona como jogador"]
  ),
  // Adicione mais managers aqui
];

const laLigaClubs: Club[] = [
  {
    id: 21,
    name: "Real Madrid",
    shortName: "RMA",
    city: "Madrid",
    country: "Espanha",
    yearFounded: 1902,
    colors: {
      primary: "#FFFFFF",
      secondary: "#FEB83D"
    },
    budget: 500000000,
    reputation: 95,
    fanbase: 1200000000,
    stadium: laLigaStadiums[0],
    manager: laLigaManagers[0],
    style: "balanced",
    history: [
      createHistoricalEvent(
        21,
        2022,
        "14ª Champions League",
        "Ampliação do recorde de títulos da Champions League",
        { reputation: 40, fanbase: 35, finance: 45 }
      )
    ],
    rivals: [22, 23],
    achievements: {
      leagueTitles: 35,
      cupTitles: 20,
      continentalTitles: 14
    },
    status: {
      morale: "excellent",
      financialHealth: 95,
      boardConfidence: 95,
      fanSatisfaction: 90
    }
  },
  {
    id: 22,
    name: "Barcelona",
    shortName: "BAR",
    city: "Barcelona",
    country: "Espanha",
    yearFounded: 1899,
    colors: {
      primary: "#A50044",
      secondary: "#004D98"
    },
    budget: 400000000,
    reputation: 90,
    fanbase: 1000000000,
    stadium: laLigaStadiums[1],
    manager: laLigaManagers[1],
    style: "possession",
    history: [
      createHistoricalEvent(
        22,
        2023,
        "La Liga",
        "Título espanhol após período de reconstrução",
        { reputation: 25, fanbase: 20, finance: 15 }
      )
    ],
    rivals: [21, 23],
    achievements: {
      leagueTitles: 27,
      cupTitles: 31,
      continentalTitles: 5
    },
    status: {
      morale: "good",
      financialHealth: 70,
      boardConfidence: 85,
      fanSatisfaction: 80
    }
  },
  {
    id: 23,
    name: "Atlético de Madrid",
    shortName: "ATM",
    city: "Madrid",
    country: "Espanha",
    yearFounded: 1903,
    colors: {
      primary: "#CB3524",
      secondary: "#FFFFFF"
    },
    budget: 350000000,
    reputation: 88,
    fanbase: 450000000,
    stadium: laLigaStadiums[2],
    manager: laLigaManagers[2],
    style: "defensive",
    history: [
      createHistoricalEvent(
        23,
        2021,
        "Campeão Espanhol",
        "Conquista de La Liga quebrando duopólio Real-Barça",
        { reputation: 30, fanbase: 25, finance: 20 }
      )
    ],
    rivals: [21, 22],
    achievements: {
      leagueTitles: 11,
      cupTitles: 10,
      continentalTitles: 3
    },
    status: {
      morale: "good",
      financialHealth: 80,
      boardConfidence: 85,
      fanSatisfaction: 85
    }
  },
  {
    id: 24,
    name: "Athletic Bilbao",
    shortName: "ATH",
    city: "Bilbao",
    country: "Espanha",
    yearFounded: 1898,
    colors: {
      primary: "#EE2523",
      secondary: "#FFFFFF"
    },
    budget: 150000000,
    reputation: 82,
    fanbase: 250000000,
    stadium: createStadium(
      24,
      "San Mamés",
      53289,
      "modern",
      {
        lighting: true,
        roofing: true,
        vipAreas: true,
        fanShop: true,
        museum: true
      },
      92,
      1200000
    ),
    manager: createManager(
      24,
      "Ernesto Valverde",
      59,
      "Espanha",
      83,
      "tactical",
      "balanced",
      85,
      ["Retorno ao Athletic Bilbao", "Ex-treinador do Barcelona"]
    ),
    style: "balanced",
    history: [
      createHistoricalEvent(
        24,
        2024,
        "Copa del Rey",
        "Conquista da Copa do Rei após 40 anos",
        { reputation: 20, fanbase: 25, finance: 15 }
      )
    ],
    rivals: [25],
    achievements: {
      leagueTitles: 8,
      cupTitles: 24,
      continentalTitles: 0
    },
    status: {
      morale: "excellent",
      financialHealth: 85,
      boardConfidence: 90,
      fanSatisfaction: 95
    }
  },
  {
    id: 25,
    name: "Real Sociedad",
    shortName: "RSO",
    city: "San Sebastián",
    country: "Espanha",
    yearFounded: 1909,
    colors: {
      primary: "#0000FF",
      secondary: "#FFFFFF"
    },
    budget: 120000000,
    reputation: 80,
    fanbase: 200000000,
    stadium: createStadium(
      25,
      "Reale Arena",
      39500,
      "modern",
      {
        lighting: true,
        roofing: true,
        vipAreas: true,
        fanShop: true,
        museum: true
      },
      88,
      800000
    ),
    manager: createManager(
      25,
      "Imanol Alguacil",
      52,
      "Espanha",
      80,
      "tactical",
      "possession",
      82,
      ["Classificação para Champions League", "Copa del Rey 2020"]
    ),
    style: "possession",
    history: [
      createHistoricalEvent(
        25,
        2023,
        "Champions League",
        "Retorno à Champions League após 10 anos",
        { reputation: 15, fanbase: 20, finance: 25 }
      )
    ],
    rivals: [24],
    achievements: {
      leagueTitles: 2,
      cupTitles: 3,
      continentalTitles: 0
    },
    status: {
      morale: "good",
      financialHealth: 80,
      boardConfidence: 85,
      fanSatisfaction: 85
    }
  }
];

// Serie A
const serieAStadiums = [
  createStadium(
    5,
    "Allianz Stadium",
    41507,
    "modern",
    {
      lighting: true,
      roofing: true,
      vipAreas: true,
      fanShop: true,
      museum: true
    },
    92,
    2000000
  ),
  createStadium(
    6,
    "San Siro",
    80018,
    "legendary",
    {
      lighting: true,
      roofing: true,
      vipAreas: true,
      fanShop: true,
      museum: true
    },
    94,
    2500000
  ),
];

const serieAManagers = [
  createManager(
    5,
    "Massimiliano Allegri",
    56,
    "Itália",
    88,
    "tactical",
    "defensive",
    85,
    ["6 títulos da Serie A", "2 finais de Champions League"]
  ),
  createManager(
    6,
    "Simone Inzaghi",
    47,
    "Itália",
    82,
    "tactical",
    "balanced",
    83,
    ["Vice-campeão Champions League 2023", "Campeão Coppa Italia 2023"]
  ),
];

const serieAClubs: Club[] = [
  {
    id: 31,
    name: "Inter de Milão",
    shortName: "INT",
    city: "Milão",
    country: "Itália",
    yearFounded: 1908,
    colors: {
      primary: "#0066B3",
      secondary: "#000000"
    },
    budget: 380000000,
    reputation: 88,
    fanbase: 450000000,
    stadium: serieAStadiums[0],
    manager: serieAManagers[0],
    style: "balanced",
    history: [
      createHistoricalEvent(
        31,
        2021,
        "Scudetto",
        "Conquista do campeonato italiano após 11 anos",
        { reputation: 25, fanbase: 20, finance: 15 }
      )
    ],
    rivals: [32, 33],
    achievements: {
      leagueTitles: 19,
      cupTitles: 8,
      continentalTitles: 3
    },
    status: {
      morale: "excellent",
      financialHealth: 75,
      boardConfidence: 90,
      fanSatisfaction: 85
    }
  },
  {
    id: 32,
    name: "Milan",
    shortName: "MIL",
    city: "Milão",
    country: "Itália",
    yearFounded: 1899,
    colors: {
      primary: "#FB090B",
      secondary: "#000000"
    },
    budget: 350000000,
    reputation: 87,
    fanbase: 400000000,
    stadium: serieAStadiums[0],
    manager: serieAManagers[1],
    style: "attacking",
    history: [
      createHistoricalEvent(
        32,
        2022,
        "Scudetto",
        "Retorno ao topo do futebol italiano",
        { reputation: 25, fanbase: 20, finance: 15 }
      )
    ],
    rivals: [31, 33],
    achievements: {
      leagueTitles: 19,
      cupTitles: 5,
      continentalTitles: 7
    },
    status: {
      morale: "good",
      financialHealth: 80,
      boardConfidence: 85,
      fanSatisfaction: 80
    }
  },
  {
    id: 33,
    name: "Juventus",
    shortName: "JUV",
    city: "Turim",
    country: "Itália",
    yearFounded: 1897,
    colors: {
      primary: "#000000",
      secondary: "#FFFFFF"
    },
    budget: 400000000,
    reputation: 86,
    fanbase: 550000000,
    stadium: serieAStadiums[1],
    manager: serieAManagers[2],
    style: "balanced",
    history: [
      createHistoricalEvent(
        33,
        2020,
        "Nono Scudetto Consecutivo",
        "Recorde de títulos consecutivos no Campeonato Italiano",
        { reputation: 30, fanbase: 25, finance: 20 }
      )
    ],
    rivals: [31, 32],
    achievements: {
      leagueTitles: 36,
      cupTitles: 14,
      continentalTitles: 2
    },
    status: {
      morale: "normal",
      financialHealth: 70,
      boardConfidence: 75,
      fanSatisfaction: 70
    }
  },
  {
    id: 34,
    name: "Napoli",
    shortName: "NAP",
    city: "Nápoles",
    country: "Itália",
    yearFounded: 1926,
    colors: {
      primary: "#00A1E4",
      secondary: "#FFFFFF"
    },
    budget: 250000000,
    reputation: 85,
    fanbase: 300000000,
    stadium: createStadium(
      34,
      "Diego Armando Maradona",
      54726,
      "legendary",
      {
        lighting: true,
        roofing: true,
        vipAreas: true,
        fanShop: true,
        museum: true
      },
      85,
      1000000
    ),
    manager: createManager(
      34,
      "Walter Mazzarri",
      62,
      "Itália",
      78,
      "tactical",
      "balanced",
      80,
      ["Retorno ao Napoli", "Experiência na Serie A"]
    ),
    style: "attacking",
    history: [
      createHistoricalEvent(
        34,
        2023,
        "Scudetto",
        "Conquista histórica do terceiro título italiano",
        { reputation: 35, fanbase: 30, finance: 25 }
      )
    ],
    rivals: [35],
    achievements: {
      leagueTitles: 3,
      cupTitles: 6,
      continentalTitles: 0
    },
    status: {
      morale: "good",
      financialHealth: 85,
      boardConfidence: 80,
      fanSatisfaction: 90
    }
  },
  {
    id: 35,
    name: "Roma",
    shortName: "ROM",
    city: "Roma",
    country: "Itália",
    yearFounded: 1927,
    colors: {
      primary: "#FFE600",
      secondary: "#A50044"
    },
    budget: 220000000,
    reputation: 83,
    fanbase: 350000000,
    stadium: createStadium(
      35,
      "Olímpico de Roma",
      72698,
      "legendary",
      {
        lighting: true,
        roofing: true,
        vipAreas: true,
        fanShop: true,
        museum: true
      },
      88,
      1200000
    ),
    manager: createManager(
      35,
      "Daniele De Rossi",
      40,
      "Itália",
      75,
      "motivator",
      "attacking",
      78,
      ["Ídolo do clube como jogador", "Nova fase como treinador"]
    ),
    style: "attacking",
    history: [
      createHistoricalEvent(
        35,
        2023,
        "Final Europa League",
        "Vice-campeonato da Europa League",
        { reputation: 15, fanbase: 20, finance: 15 }
      )
    ],
    rivals: [34],
    achievements: {
      leagueTitles: 3,
      cupTitles: 9,
      continentalTitles: 0
    },
    status: {
      morale: "good",
      financialHealth: 75,
      boardConfidence: 80,
      fanSatisfaction: 85
    }
  }
];

// Bundesliga
const bundesligaStadiums = [
  createStadium(
    7,
    "Allianz Arena",
    75024,
    "legendary",
    {
      lighting: true,
      roofing: true,
      vipAreas: true,
      fanShop: true,
      museum: true
    },
    93,
    3000000
  ),
  createStadium(
    8,
    "Signal Iduna Park",
    81365,
    "legendary",
    {
      lighting: true,
      roofing: true,
      vipAreas: true,
      fanShop: true,
      museum: true
    },
    99,
    2800000
  ),
];

const bundesligaManagers = [
  createManager(
    7,
    "Thomas Tuchel",
    50,
    "Alemanha",
    90,
    "tactical",
    "possession",
    92,
    ["Campeão Champions League 2021", "Campeão Bundesliga 2023"]
  ),
  createManager(
    8,
    "Edin Terzić",
    41,
    "Alemanha",
    80,
    "motivator",
    "attacking",
    78,
    ["Campeão DFB-Pokal 2021", "Vice-campeão Bundesliga 2023"]
  ),
];

const bundesligaClubs: Club[] = [
  {
    id: 41,
    name: "Bayern de Munique",
    shortName: "BAY",
    city: "Munique",
    country: "Alemanha",
    yearFounded: 1900,
    colors: {
      primary: "#DC052D",
      secondary: "#FFFFFF"
    },
    budget: 450000000,
    reputation: 93,
    fanbase: 900000000,
    stadium: bundesligaStadiums[0],
    manager: bundesligaManagers[0],
    style: "attacking",
    history: [
      createHistoricalEvent(
        41,
        2020,
        "Sextete",
        "Conquista de todos os seis títulos possíveis em um ano",
        { reputation: 40, fanbase: 35, finance: 45 }
      )
    ],
    rivals: [42, 43],
    achievements: {
      leagueTitles: 33,
      cupTitles: 20,
      continentalTitles: 6
    },
    status: {
      morale: "good",
      financialHealth: 95,
      boardConfidence: 85,
      fanSatisfaction: 80
    }
  },
  {
    id: 42,
    name: "Borussia Dortmund",
    shortName: "BVB",
    city: "Dortmund",
    country: "Alemanha",
    yearFounded: 1909,
    colors: {
      primary: "#FDE100",
      secondary: "#000000"
    },
    budget: 300000000,
    reputation: 88,
    fanbase: 600000000,
    stadium: bundesligaStadiums[1],
    manager: bundesligaManagers[1],
    style: "attacking",
    history: [
      createHistoricalEvent(
        42,
        2023,
        "Quase Lá",
        "Vice-campeonato da Bundesliga na última rodada",
        { reputation: 15, fanbase: 20, finance: 15 }
      )
    ],
    rivals: [41, 44],
    achievements: {
      leagueTitles: 8,
      cupTitles: 5,
      continentalTitles: 1
    },
    status: {
      morale: "good",
      financialHealth: 85,
      boardConfidence: 80,
      fanSatisfaction: 85
    }
  },
  {
    id: 43,
    name: "RB Leipzig",
    shortName: "RBL",
    city: "Leipzig",
    country: "Alemanha",
    yearFounded: 2009,
    colors: {
      primary: "#DD0741",
      secondary: "#FFFFFF"
    },
    budget: 250000000,
    reputation: 85,
    fanbase: 250000000,
    stadium: bundesligaStadiums[2],
    manager: bundesligaManagers[2],
    style: "possession",
    history: [
      createHistoricalEvent(
        43,
        2022,
        "Copa da Alemanha",
        "Primeira conquista da DFB-Pokal",
        { reputation: 20, fanbase: 25, finance: 20 }
      )
    ],
    rivals: [41, 42],
    achievements: {
      leagueTitles: 0,
      cupTitles: 2,
      continentalTitles: 0
    },
    status: {
      morale: "good",
      financialHealth: 90,
      boardConfidence: 85,
      fanSatisfaction: 75
    }
  },
  {
    id: 44,
    name: "Bayer Leverkusen",
    shortName: "B04",
    city: "Leverkusen",
    country: "Alemanha",
    yearFounded: 1904,
    colors: {
      primary: "#E32221",
      secondary: "#000000"
    },
    budget: 200000000,
    reputation: 84,
    fanbase: 200000000,
    stadium: createStadium(
      44,
      "BayArena",
      30210,
      "modern",
      {
        lighting: true,
        roofing: true,
        vipAreas: true,
        fanShop: true,
        museum: true
      },
      88,
      800000
    ),
    manager: createManager(
      44,
      "Xabi Alonso",
      42,
      "Espanha",
      85,
      "tactical",
      "possession",
      88,
      ["Revelação como treinador", "Transformação do Leverkusen"]
    ),
    style: "possession",
    history: [
      createHistoricalEvent(
        44,
        2024,
        "Campanha Histórica",
        "Melhor início de temporada na história da Bundesliga",
        { reputation: 25, fanbase: 30, finance: 25 }
      )
    ],
    rivals: [42],
    achievements: {
      leagueTitles: 0,
      cupTitles: 1,
      continentalTitles: 1
    },
    status: {
      morale: "excellent",
      financialHealth: 85,
      boardConfidence: 95,
      fanSatisfaction: 95
    }
  },
  {
    id: 45,
    name: "Eintracht Frankfurt",
    shortName: "SGE",
    city: "Frankfurt",
    country: "Alemanha",
    yearFounded: 1899,
    colors: {
      primary: "#000000",
      secondary: "#E1000F"
    },
    budget: 180000000,
    reputation: 82,
    fanbase: 250000000,
    stadium: createStadium(
      45,
      "Deutsche Bank Park",
      51500,
      "modern",
      {
        lighting: true,
        roofing: true,
        vipAreas: true,
        fanShop: true,
        museum: true
      },
      85,
      700000
    ),
    manager: createManager(
      45,
      "Dino Toppmöller",
      43,
      "Alemanha",
      75,
      "tactical",
      "balanced",
      78,
      ["Nova geração de treinadores", "Projeto de desenvolvimento"]
    ),
    style: "balanced",
    history: [
      createHistoricalEvent(
        45,
        2022,
        "Europa League",
        "Conquista da Liga Europa após 42 anos",
        { reputation: 30, fanbase: 25, finance: 20 }
      )
    ],
    rivals: [44],
    achievements: {
      leagueTitles: 1,
      cupTitles: 5,
      continentalTitles: 2
    },
    status: {
      morale: "good",
      financialHealth: 80,
      boardConfidence: 85,
      fanSatisfaction: 85
    }
  }
];

// Ligue 1
const ligue1Stadiums = [
  createStadium(
    9,
    "Parc des Princes",
    47929,
    "modern",
    {
      lighting: true,
      roofing: true,
      vipAreas: true,
      fanShop: true,
      museum: true
    },
    90,
    2000000
  ),
  createStadium(
    10,
    "Orange Vélodrome",
    67394,
    "modern",
    {
      lighting: true,
      roofing: true,
      vipAreas: true,
      fanShop: true,
      museum: true
    },
    92,
    1500000
  ),
];

const ligue1Managers = [
  createManager(
    9,
    "Luis Enrique",
    53,
    "Espanha",
    88,
    "tactical",
    "possession",
    85,
    ["Triplete com Barcelona 2015", "Novo desafio no PSG"]
  ),
  createManager(
    10,
    "Gennaro Gattuso",
    45,
    "Itália",
    75,
    "motivator",
    "balanced",
    75,
    ["Ex-jogador lendário", "Nova fase como treinador"]
  ),
];

const ligue1Clubs: Club[] = [
  {
    id: 51,
    name: "Paris Saint-Germain",
    shortName: "PSG",
    city: "Paris",
    country: "França",
    yearFounded: 1970,
    colors: {
      primary: "#004170",
      secondary: "#E30613"
    },
    budget: 700000000,
    reputation: 89,
    fanbase: 450000000,
    stadium: ligue1Stadiums[0],
    manager: ligue1Managers[0],
    style: "attacking",
    history: [
      createHistoricalEvent(
        51,
        2023,
        "Era Mbappé",
        "Renovação histórica do contrato de Mbappé",
        { reputation: 25, fanbase: 30, finance: -20 }
      )
    ],
    rivals: [52, 53],
    achievements: {
      leagueTitles: 11,
      cupTitles: 14,
      continentalTitles: 0
    },
    status: {
      morale: "good",
      financialHealth: 90,
      boardConfidence: 85,
      fanSatisfaction: 80
    }
  },
  {
    id: 52,
    name: "Olympique de Marseille",
    shortName: "OM",
    city: "Marseille",
    country: "França",
    yearFounded: 1899,
    colors: {
      primary: "#FFFFFF",
      secondary: "#00A0DF"
    },
    budget: 200000000,
    reputation: 83,
    fanbase: 350000000,
    stadium: ligue1Stadiums[1],
    manager: ligue1Managers[1],
    style: "balanced",
    history: [
      createHistoricalEvent(
        52,
        2024,
        "Retorno às Origens",
        "Projeto de renovação com foco na base",
        { reputation: 15, fanbase: 20, finance: 10 }
      )
    ],
    rivals: [51, 53],
    achievements: {
      leagueTitles: 9,
      cupTitles: 10,
      continentalTitles: 1
    },
    status: {
      morale: "good",
      financialHealth: 75,
      boardConfidence: 80,
      fanSatisfaction: 75
    }
  },
  {
    id: 53,
    name: "AS Monaco",
    shortName: "ASM",
    city: "Monaco",
    country: "França",
    yearFounded: 1924,
    colors: {
      primary: "#FFFFFF",
      secondary: "#EF1B23"
    },
    budget: 180000000,
    reputation: 82,
    fanbase: 200000000,
    stadium: createStadium(
      53,
      "Stade Louis II",
      18523,
      "modern",
      {
        lighting: true,
        roofing: true,
        vipAreas: true,
        fanShop: true,
        museum: true
      },
      85,
      600000
    ),
    manager: createManager(
      53,
      "Adi Hütter",
      54,
      "Áustria",
      82,
      "tactical",
      "attacking",
      85,
      ["Experiência internacional", "Desenvolvimento de jovens"]
    ),
    style: "attacking",
    history: [
      createHistoricalEvent(
        53,
        2017,
        "Título Histórico",
        "Conquista da Ligue 1 quebrando hegemonia do PSG",
        { reputation: 30, fanbase: 25, finance: 20 }
      )
    ],
    rivals: [51, 52],
    achievements: {
      leagueTitles: 8,
      cupTitles: 5,
      continentalTitles: 0
    },
    status: {
      morale: "good",
      financialHealth: 85,
      boardConfidence: 80,
      fanSatisfaction: 80
    }
  },
  {
    id: 54,
    name: "LOSC Lille",
    shortName: "LOSC",
    city: "Lille",
    country: "França",
    yearFounded: 1944,
    colors: {
      primary: "#E82C2C",
      secondary: "#003C7E"
    },
    budget: 150000000,
    reputation: 80,
    fanbase: 180000000,
    stadium: createStadium(
      54,
      "Stade Pierre-Mauroy",
      50186,
      "modern",
      {
        lighting: true,
        roofing: true,
        vipAreas: true,
        fanShop: true,
        museum: true
      },
      83,
      550000
    ),
    manager: createManager(
      54,
      "Paulo Fonseca",
      50,
      "Portugal",
      80,
      "tactical",
      "possession",
      82,
      ["Inovação tática", "Desenvolvimento de talentos"]
    ),
    style: "possession",
    history: [
      createHistoricalEvent(
        54,
        2021,
        "Campeão Improvável",
        "Conquista surpreendente da Ligue 1",
        { reputation: 35, fanbase: 30, finance: 25 }
      )
    ],
    rivals: [51],
    achievements: {
      leagueTitles: 4,
      cupTitles: 6,
      continentalTitles: 0
    },
    status: {
      morale: "good",
      financialHealth: 75,
      boardConfidence: 85,
      fanSatisfaction: 80
    }
  },
  {
    id: 55,
    name: "Olympique Lyonnais",
    shortName: "OL",
    city: "Lyon",
    country: "França",
    yearFounded: 1950,
    colors: {
      primary: "#FFFFFF",
      secondary: "#E51B23"
    },
    budget: 160000000,
    reputation: 81,
    fanbase: 250000000,
    stadium: createStadium(
      55,
      "Groupama Stadium",
      59186,
      "modern",
      {
        lighting: true,
        roofing: true,
        vipAreas: true,
        fanShop: true,
        museum: true
      },
      87,
      650000
    ),
    manager: createManager(
      55,
      "Pierre Sage",
      44,
      "França",
      75,
      "tactical",
      "balanced",
      78,
      ["Projeto de reconstrução", "Foco na base"]
    ),
    style: "balanced",
    history: [
      createHistoricalEvent(
        55,
        2024,
        "Renascimento",
        "Início da reconstrução após período difícil",
        { reputation: 10, fanbase: 15, finance: 15 }
      )
    ],
    rivals: [52],
    achievements: {
      leagueTitles: 7,
      cupTitles: 5,
      continentalTitles: 0
    },
    status: {
      morale: "improving",
      financialHealth: 70,
      boardConfidence: 75,
      fanSatisfaction: 70
    }
  }
];

// Primeira Liga
const primeiraLigaStadiums = [
  createStadium(
    11,
    "Estádio da Luz",
    65647,
    "legendary",
    {
      lighting: true,
      roofing: true,
      vipAreas: true,
      fanShop: true,
      museum: true
    },
    95,
    1500000
  ),
  createStadium(
    12,
    "Estádio do Dragão",
    50033,
    "legendary",
    {
      lighting: true,
      roofing: true,
      vipAreas: true,
      fanShop: true,
      museum: true
    },
    94,
    1200000
  ),
  createStadium(
    13,
    "Estádio José Alvalade",
    50095,
    "modern",
    {
      lighting: true,
      roofing: true,
      vipAreas: true,
      fanShop: true,
      museum: true
    },
    92,
    1000000
  ),
  createStadium(
    14,
    "Estádio D. Afonso Henriques",
    30000,
    "modern",
    {
      lighting: true,
      roofing: true,
      vipAreas: true,
      fanShop: true
    },
    88,
    500000
  )
];

const primeiraLigaManagers = [
  createManager(
    11,
    "Roger Schmidt",
    57,
    "Alemanha",
    85,
    "tactical",
    "attacking",
    88,
    ["Bicampeão Português com o Benfica", "Campeão Austríaco com o Red Bull Salzburg"]
  ),
  createManager(
    12,
    "Sérgio Conceição",
    49,
    "Portugal",
    87,
    "motivator",
    "balanced",
    90,
    ["Tricampeão Português com o Porto", "Vencedor da Taça de Portugal"]
  ),
  createManager(
    13,
    "Rúben Amorim",
    39,
    "Portugal",
    83,
    "tactical",
    "possession",
    85,
    ["Campeão Português com o Sporting", "Revelação como treinador em Portugal"]
  ),
  createManager(
    14,
    "Álvaro Pacheco",
    52,
    "Portugal",
    75,
    "motivator",
    "attacking",
    75,
    ["Subida à Primeira Liga com o Vizela", "Estilo de jogo ofensivo"]
  )
];

const primeiraLigaClubs: Club[] = [
  {
    id: 11,
    name: "Benfica",
    shortName: "SLB",
    city: "Lisboa",
    country: "Portugal",
    yearFounded: 1904,
    colors: {
      primary: "#FF0000",
      secondary: "#FFFFFF"
    },
    budget: 100000000,
    reputation: 85,
    fanbase: 350000000,
    stadium: primeiraLigaStadiums[0],
    manager: primeiraLigaManagers[0],
    style: "attacking",
    history: [
      createHistoricalEvent(
        16,
        1961,
        "Bicampeão Europeu",
        "Conquista de duas Champions League consecutivas",
        { reputation: 40, fanbase: 30, finance: 20 }
      )
    ],
    rivals: [12, 13],
    achievements: {
      leagueTitles: 38,
      cupTitles: 26,
      continentalTitles: 2
    },
    status: {
      morale: "excellent",
      financialHealth: 85,
      boardConfidence: 90,
      fanSatisfaction: 85
    }
  },
  {
    id: 12,
    name: "FC Porto",
    shortName: "FCP",
    city: "Porto",
    country: "Portugal",
    yearFounded: 1893,
    colors: {
      primary: "#003E7E",
      secondary: "#FFFFFF"
    },
    budget: 80000000,
    reputation: 83,
    fanbase: 280000000,
    stadium: primeiraLigaStadiums[1],
    manager: primeiraLigaManagers[1],
    style: "balanced",
    history: [
      createHistoricalEvent(
        17,
        2004,
        "Champions League",
        "Conquista da Champions League sob José Mourinho",
        { reputation: 35, fanbase: 25, finance: 30 }
      )
    ],
    rivals: [11, 13],
    achievements: {
      leagueTitles: 30,
      cupTitles: 18,
      continentalTitles: 2
    },
    status: {
      morale: "good",
      financialHealth: 80,
      boardConfidence: 85,
      fanSatisfaction: 80
    }
  },
  {
    id: 13,
    name: "Sporting CP",
    shortName: "SCP",
    city: "Lisboa",
    country: "Portugal",
    yearFounded: 1906,
    colors: {
      primary: "#008D36",
      secondary: "#FFFFFF"
    },
    budget: 70000000,
    reputation: 80,
    fanbase: 250000000,
    stadium: primeiraLigaStadiums[2],
    manager: primeiraLigaManagers[2],
    style: "possession",
    history: [
      createHistoricalEvent(
        18,
        2021,
        "Fim do Jejum",
        "Conquista do campeonato após 19 anos",
        { reputation: 20, fanbase: 25, finance: 15 }
      )
    ],
    rivals: [11, 12],
    achievements: {
      leagueTitles: 19,
      cupTitles: 17,
      continentalTitles: 0
    },
    status: {
      morale: "good",
      financialHealth: 75,
      boardConfidence: 80,
      fanSatisfaction: 75
    }
  },
  {
    id: 14,
    name: "Vitória SC",
    shortName: "VSC",
    city: "Guimarães",
    country: "Portugal",
    yearFounded: 1922,
    colors: {
      primary: "#FFFFFF",
      secondary: "#000000"
    },
    budget: 35000000,
    reputation: 75,
    fanbase: 150000,
    stadium: {
      ...primeiraLigaStadiums[3],
      capacity: 32000,
      facilities: {
        lighting: true,
        roofing: true,
        vipAreas: true,
        fanShop: true,
        museum: true,
        trainingFacilities: true
      }
    },
    manager: {
      ...primeiraLigaManagers[3],
      name: "Moreno Teixeira",
      age: 42,
      nationality: "Portugal",
      experience: 80,
      personality: "motivator",
      preferredStyle: "attacking",
      reputation: 78,
      achievements: ["Classificação para Liga Europa 2024", "Revelação da Primeira Liga"]
    },
    style: "attacking",
    history: [
      createHistoricalEvent(
        19,
        2013,
        "Final Europeia",
        "Chegada à final da Liga Europa",
        { reputation: 15, fanbase: 20, finance: 10 }
      ),
      createHistoricalEvent(
        20,
        2024,
        "Retorno Europeu",
        "Classificação para a Liga Europa após campanha histórica",
        { reputation: 10, fanbase: 15, finance: 12 }
      )
    ],
    rivals: [12],
    achievements: {
      leagueTitles: 0,
      cupTitles: 2,
      continentalTitles: 0
    },
    status: {
      morale: "excellent",
      financialHealth: 75,
      boardConfidence: 85,
      fanSatisfaction: 90
    }
  },
  {
    id: 15,
    name: "SC Braga",
    shortName: "SCB",
    city: "Braga",
    country: "Portugal",
    yearFounded: 1921,
    colors: {
      primary: "#FF0000",
      secondary: "#FFFFFF"
    },
    budget: 45000000,
    reputation: 77,
    fanbase: 180000,
    stadium: createStadium(
      15,
      "Estádio Municipal de Braga",
      30286,
      "modern",
      {
        lighting: true,
        roofing: true,
        vipAreas: true,
        fanShop: true,
        museum: true
      },
      89,
      600000
    ),
    manager: createManager(
      15,
      "Artur Jorge",
      48,
      "Portugal",
      78,
      "tactical",
      "attacking",
      82,
      ["Título da Taça de Portugal", "Qualificação Champions League"]
    ),
    style: "attacking",
    history: [
      createHistoricalEvent(
        21,
        2023,
        "Qualificação Histórica",
        "Primeira qualificação direta para a Champions League",
        { reputation: 15, fanbase: 20, finance: 25 }
      )
    ],
    rivals: [14, 12],
    achievements: {
      leagueTitles: 0,
      cupTitles: 3,
      continentalTitles: 0
    },
    status: {
      morale: "excellent",
      financialHealth: 78,
      boardConfidence: 88,
      fanSatisfaction: 85
    }
  },
  {
    id: 16,
    name: "Boavista FC",
    shortName: "BFC",
    city: "Porto",
    country: "Portugal",
    yearFounded: 1903,
    colors: {
      primary: "#000000",
      secondary: "#FFFFFF"
    },
    budget: 22000000,
    reputation: 72,
    fanbase: 120000,
    stadium: createStadium(
      16,
      "Estádio do Bessa",
      28263,
      "basic" as StadiumTier,
      {
        lighting: true,
        roofing: true,
        vipAreas: true,
        fanShop: true
      },
      82,
      350000
    ),
    manager: createManager(
      16,
      "Petit",
      47,
      "Portugal",
      73,
      "motivator",
      "balanced",
      75,
      ["Ex-jogador do clube", "Estabilidade na Primeira Liga"]
    ),
    style: "balanced",
    history: [
      createHistoricalEvent(
        22,
        2001,
        "Título Histórico",
        "Conquista do único campeonato português",
        { reputation: 25, fanbase: 15, finance: 10 }
      )
    ],
    rivals: [12],
    achievements: {
      leagueTitles: 1,
      cupTitles: 5,
      continentalTitles: 0
    },
    status: {
      morale: "good",
      financialHealth: 68,
      boardConfidence: 75,
      fanSatisfaction: 72
    }
  },
  {
    id: 17,
    name: "Famalicão",
    shortName: "FCF",
    city: "Vila Nova de Famalicão",
    country: "Portugal",
    yearFounded: 1931,
    colors: {
      primary: "#0000FF",
      secondary: "#FFFFFF"
    },
    budget: 18000000,
    reputation: 68,
    fanbase: 80000,
    stadium: createStadium(
      17,
      "Estádio Municipal 22 de Junho",
      5307,
      "modern",
      {
        lighting: true,
        roofing: true,
        vipAreas: true,
        fanShop: true
      },
      75,
      200000
    ),
    manager: createManager(
      17,
      "João Pedro Sousa",
      52,
      "Portugal",
      70,
      "tactical",
      "possession",
      72,
      ["Revelação na Primeira Liga", "Desenvolvimento de jovens talentos"]
    ),
    style: "possession",
    history: [
      createHistoricalEvent(
        23,
        2019,
        "Retorno à Elite",
        "Regresso à Primeira Liga após 25 anos",
        { reputation: 15, fanbase: 20, finance: 15 }
      )
    ],
    rivals: [14],
    achievements: {
      leagueTitles: 0,
      cupTitles: 0,
      continentalTitles: 0
    },
    status: {
      morale: "good",
      financialHealth: 72,
      boardConfidence: 78,
      fanSatisfaction: 75
    }
  },
  {
    id: 18,
    name: "Moreirense FC",
    shortName: "MFC",
    city: "Moreira de Cónegos",
    country: "Portugal",
    yearFounded: 1938,
    colors: {
      primary: "#008000",
      secondary: "#FFFFFF"
    },
    budget: 12000000,
    reputation: 65,
    fanbase: 50000,
    stadium: createStadium(
      18,
      "Parque de Jogos Comendador Joaquim de Almeida Freitas",
      6000,
      "modern",
      {
        lighting: true,
        roofing: true,
        vipAreas: true,
        fanShop: true
      },
      70,
      150000
    ),
    manager: createManager(
      18,
      "Rui Borges",
      44,
      "Portugal",
      68,
      "motivator",
      "balanced",
      70,
      ["Promoção à Primeira Liga", "Projeto de desenvolvimento sustentável"]
    ),
    style: "balanced",
    history: [
      createHistoricalEvent(
        24,
        2024,
        "Consolidação",
        "Melhor classificação histórica na Primeira Liga",
        { reputation: 10, fanbase: 15, finance: 12 }
      )
    ],
    rivals: [17],
    achievements: {
      leagueTitles: 0,
      cupTitles: 0,
      continentalTitles: 0
    },
    status: {
      morale: "good",
      financialHealth: 70,
      boardConfidence: 75,
      fanSatisfaction: 72
    }
  }
];

// Exportar as ligas
export const europeanLeagues: League[] = [
  {
    id: 1,
    name: "Premier League",
    country: "Inglaterra",
    tier: 1,
    reputation: 100,
    clubs: premierLeagueClubs,
    history: [
      createHistoricalEvent(
        5,
        1992,
        "Criação da Premier League",
        "Reformulação do futebol inglês com a criação da Premier League",
        { reputation: 50, finance: 100 }
      )
    ],
    prizePool: 2500000000,
    continentalSpots: {
      champions: 4,
      europa: 2,
      conference: 1
    },
    specialRules: [
      "Regra do Fair Play Financeiro",
      "Limite de jogadores estrangeiros pós-Brexit"
    ],
    seasonDates: {
      start: "2025-08-01",
      end: "2026-05-31",
      transferWindows: {
        summer: { start: "2025-07-01", end: "2025-09-01" },
        winter: { start: "2026-01-01", end: "2026-01-31" }
      }
    }
  },
  {
    id: 2,
    name: "La Liga",
    country: "Espanha",
    tier: 1,
    reputation: 95,
    clubs: laLigaClubs,
    history: [
      createHistoricalEvent(
        6,
        2013,
        "Domínio Internacional",
        "Clubes espanhóis dominam competições europeias",
        { reputation: 40, finance: 60 }
      )
    ],
    prizePool: 2000000000,
    continentalSpots: {
      champions: 4,
      europa: 2,
      conference: 1
    },
    specialRules: [
      "Limite salarial rigoroso",
      "Regra de proteção às categorias de base"
    ],
    seasonDates: {
      start: "2025-08-15",
      end: "2026-05-31",
      transferWindows: {
        summer: { start: "2025-07-01", end: "2025-09-01" },
        winter: { start: "2026-01-01", end: "2026-01-31" }
      }
    }
  },
  {
    id: 3,
    name: "Serie A",
    country: "Itália",
    tier: 1,
    reputation: 90,
    clubs: serieAClubs,
    history: [
      createHistoricalEvent(
        13,
        2006,
        "Calciopoli",
        "Escândalo que mudou o futebol italiano",
        { reputation: -30, finance: -20 }
      )
    ],
    prizePool: 1500000000,
    continentalSpots: {
      champions: 4,
      europa: 2,
      conference: 1
    },
    specialRules: [
      "Limite de jogadores não-UE",
      "Regras rigorosas de licenciamento"
    ],
    seasonDates: {
      start: "2025-08-15",
      end: "2026-05-31",
      transferWindows: {
        summer: { start: "2025-07-01", end: "2025-09-01" },
        winter: { start: "2026-01-01", end: "2026-01-31" }
      }
    }
  },
  {
    id: 4,
    name: "Bundesliga",
    country: "Alemanha",
    tier: 1,
    reputation: 88,
    clubs: bundesligaClubs,
    history: [
      createHistoricalEvent(
        14,
        1963,
        "Fundação da Bundesliga",
        "Criação da liga profissional alemã",
        { reputation: 40, finance: 30 }
      )
    ],
    prizePool: 1800000000,
    continentalSpots: {
      champions: 4,
      europa: 2,
      conference: 1
    },
    specialRules: [
      "Regra 50+1",
      "Foco em sustentabilidade financeira"
    ],
    seasonDates: {
      start: "2025-08-15",
      end: "2026-05-31",
      transferWindows: {
        summer: { start: "2025-07-01", end: "2025-09-01" },
        winter: { start: "2026-01-01", end: "2026-01-31" }
      }
    }
  },
  {
    id: 5,
    name: "Ligue 1",
    country: "França",
    tier: 1,
    reputation: 85,
    clubs: ligue1Clubs,
    history: [
      createHistoricalEvent(
        15,
        2011,
        "Era PSG",
        "Investimento do Qatar transforma o futebol francês",
        { reputation: 20, finance: 50 }
      )
    ],
    prizePool: 1200000000,
    continentalSpots: {
      champions: 3,
      europa: 2,
      conference: 1
    },
    specialRules: [
      "Controle financeiro DNCG",
      "Foco em desenvolvimento de jovens"
    ],
    seasonDates: {
      start: "2025-08-15",
      end: "2026-05-31",
      transferWindows: {
        summer: { start: "2025-07-01", end: "2025-09-01" },
        winter: { start: "2026-01-01", end: "2026-01-31" }
      }
    }
  },
  {
    id: 6,
    name: "Primeira Liga",
    country: "Portugal",
    tier: 1,
    reputation: 82,
    clubs: primeiraLigaClubs,
    history: [
      createHistoricalEvent(
        20,
        2004,
        "Domínio Europeu",
        "Porto vence Champions League e consolida prestígio português",
        { reputation: 30, finance: 25 }
      )
    ],
    prizePool: 800000000,
    continentalSpots: {
      champions: 3,
      europa: 2,
      conference: 1
    },
    specialRules: [
      "Limite de jogadores extracomunitários",
      "Foco em formação de jovens"
    ],
    seasonDates: {
      start: "2025-08-15",
      end: "2026-05-31",
      transferWindows: {
        summer: { start: "2025-07-01", end: "2025-09-01" },
        winter: { start: "2026-01-01", end: "2026-01-31" }
      }
    }
  }
]; 