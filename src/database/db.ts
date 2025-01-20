import Dexie, { Table } from 'dexie';

// Interfaces para os tipos de dados
export interface Team {
  id?: number;
  name: string;
  money: number;
  reputation: number;
  manager: string;
}

export interface Player {
  id?: number;
  teamId: number;
  name: string;
  position: string;
  skill: number;
  energy: number;
}

export interface Match {
  id?: number;
  homeTeamId: number;
  awayTeamId: number;
  homeScore: number;
  awayScore: number;
  date: Date;
}

// Classe do banco de dados
class HugFootDatabase extends Dexie {
  teams!: Table<Team>;
  players!: Table<Player>;
  matches!: Table<Match>;

  constructor() {
    super('HugFootDB');
    this.version(1).stores({
      teams: '++id, name',
      players: '++id, teamId, name, position',
      matches: '++id, homeTeamId, awayTeamId, date'
    });
  }
}

export const db = new HugFootDatabase(); 