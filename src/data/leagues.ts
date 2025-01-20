export interface Club {
  id: number;
  name: string;
  shortName: string;
  city: string;
  budget: number;
  reputation: number;
  stadiumCapacity: number;
  fanBase: number;
}

export interface League {
  id: number;
  name: string;
  country: string;
  level: number;
  clubs: Club[];
}

export const leagues: League[] = [
  {
    id: 1,
    name: 'Série A',
    country: 'Brasil',
    level: 1,
    clubs: [
      {
        id: 1,
        name: 'Palmeiras',
        shortName: 'PAL',
        city: 'São Paulo',
        budget: 350000000,
        reputation: 85,
        stadiumCapacity: 43000,
        fanBase: 16000000
      },
      {
        id: 2,
        name: 'Flamengo',
        shortName: 'FLA',
        city: 'Rio de Janeiro',
        budget: 400000000,
        reputation: 85,
        stadiumCapacity: 78000,
        fanBase: 42000000
      },
      {
        id: 3,
        name: 'Fluminense',
        shortName: 'FLU',
        city: 'Rio de Janeiro',
        budget: 180000000,
        reputation: 80,
        stadiumCapacity: 78000,
        fanBase: 4000000
      },
      {
        id: 4,
        name: 'São Paulo',
        shortName: 'SAO',
        city: 'São Paulo',
        budget: 280000000,
        reputation: 82,
        stadiumCapacity: 66000,
        fanBase: 16500000
      }
    ]
  },
  {
    id: 2,
    name: 'Premier League',
    country: 'Inglaterra',
    level: 1,
    clubs: [
      {
        id: 5,
        name: 'Manchester City',
        shortName: 'MCI',
        city: 'Manchester',
        budget: 700000000,
        reputation: 90,
        stadiumCapacity: 53400,
        fanBase: 30000000
      },
      {
        id: 6,
        name: 'Liverpool',
        shortName: 'LIV',
        city: 'Liverpool',
        budget: 600000000,
        reputation: 88,
        stadiumCapacity: 53394,
        fanBase: 45000000
      },
      {
        id: 7,
        name: 'Arsenal',
        shortName: 'ARS',
        city: 'Londres',
        budget: 550000000,
        reputation: 85,
        stadiumCapacity: 60704,
        fanBase: 37000000
      }
    ]
  },
  {
    id: 3,
    name: 'La Liga',
    country: 'Espanha',
    level: 1,
    clubs: [
      {
        id: 8,
        name: 'Real Madrid',
        shortName: 'RMA',
        city: 'Madrid',
        budget: 800000000,
        reputation: 92,
        stadiumCapacity: 81044,
        fanBase: 100000000
      },
      {
        id: 9,
        name: 'Barcelona',
        shortName: 'BAR',
        city: 'Barcelona',
        budget: 650000000,
        reputation: 88,
        stadiumCapacity: 99354,
        fanBase: 90000000
      },
      {
        id: 10,
        name: 'Atlético Madrid',
        shortName: 'ATM',
        city: 'Madrid',
        budget: 400000000,
        reputation: 85,
        stadiumCapacity: 68456,
        fanBase: 25000000
      }
    ]
  }
]; 