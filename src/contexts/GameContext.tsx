import { createContext, useContext, useState, ReactNode } from 'react';
import { Team, db } from '../database/db';

interface CreateTeamParams {
  name: string;
  money: number;
  baseSkill: number;
  manager: string;
}

interface TeamStats {
  id: number;
  name: string;
  points: number;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
}

type GameState = {
  team: Team | null;
  difficulty: 'easy' | 'normal' | 'hard';
  money: number;
  leagueStats: TeamStats[];
};

type GameContextData = {
  gameState: GameState;
  createTeam: (params: CreateTeamParams) => Promise<void>;
  setDifficulty: (difficulty: 'easy' | 'normal' | 'hard') => void;
  updateLeagueStats: (homeTeam: string, awayTeam: string, homeGoals: number, awayGoals: number) => void;
};

const GameContext = createContext<GameContextData>({} as GameContextData);

export function GameProvider({ children }: { children: ReactNode }) {
  const [gameState, setGameState] = useState<GameState>({
    team: null,
    difficulty: 'normal',
    money: 0,
    leagueStats: []
  });

  const createTeam = async ({ name, money: initialMoney, baseSkill, manager }: CreateTeamParams) => {
    // Criar o time
    const teamId = await db.teams.add({
      name,
      money: initialMoney,
      reputation: 50,
      manager
    });

    // Gerar jogadores
    const positions = [
      'GOL', 'GOL',
      'ZAG', 'ZAG', 'ZAG', 'ZAG',
      'LAT', 'LAT', 'LAT', 'LAT',
      'VOL', 'VOL', 'VOL',
      'MEI', 'MEI', 'MEI', 'MEI',
      'ATA', 'ATA', 'ATA', 'ATA', 'ATA'
    ];

    const playerPromises = positions.map((position) => {
      const skillVariation = Math.floor(Math.random() * 10) - 5;
      return db.players.add({
        teamId,
        name: `Jogador ${Math.floor(Math.random() * 99) + 1}`,
        position,
        skill: baseSkill + skillVariation,
        energy: 100,
      });
    });

    await Promise.all(playerPromises);

    const team = await db.teams.get(teamId);
    if (team) {
      setGameState(prev => ({
        ...prev,
        team,
        leagueStats: [
          {
            id: teamId,
            name: name,
            points: 0,
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            goalsFor: 0,
            goalsAgainst: 0,
            goalDifference: 0
          }
        ]
      }));
    }
  };

  const setDifficulty = (difficulty: 'easy' | 'normal' | 'hard') => {
    setGameState(prev => ({
      ...prev,
      difficulty
    }));
  };

  const updateLeagueStats = (homeTeam: string, awayTeam: string, homeGoals: number, awayGoals: number) => {
    setGameState(prev => {
      const newStats = [...prev.leagueStats];
      
      // Atualizar estatísticas do time da casa
      const homeIndex = newStats.findIndex(team => team.name === homeTeam);
      if (homeIndex >= 0) {
        const homeStats = newStats[homeIndex];
        homeStats.played += 1;
        homeStats.goalsFor += homeGoals;
        homeStats.goalsAgainst += awayGoals;
        homeStats.goalDifference = homeStats.goalsFor - homeStats.goalsAgainst;
        
        if (homeGoals > awayGoals) {
          homeStats.won += 1;
          homeStats.points += 3;
        } else if (homeGoals === awayGoals) {
          homeStats.drawn += 1;
          homeStats.points += 1;
        } else {
          homeStats.lost += 1;
        }
      }

      // Atualizar estatísticas do time visitante
      const awayIndex = newStats.findIndex(team => team.name === awayTeam);
      if (awayIndex >= 0) {
        const awayStats = newStats[awayIndex];
        awayStats.played += 1;
        awayStats.goalsFor += awayGoals;
        awayStats.goalsAgainst += homeGoals;
        awayStats.goalDifference = awayStats.goalsFor - awayStats.goalsAgainst;
        
        if (awayGoals > homeGoals) {
          awayStats.won += 1;
          awayStats.points += 3;
        } else if (awayGoals === homeGoals) {
          awayStats.drawn += 1;
          awayStats.points += 1;
        } else {
          awayStats.lost += 1;
        }
      }

      return {
        ...prev,
        leagueStats: newStats
      };
    });
  };

  return (
    <GameContext.Provider value={{ gameState, createTeam, setDifficulty, updateLeagueStats }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
} 