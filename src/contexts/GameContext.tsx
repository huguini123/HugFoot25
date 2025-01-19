import type { ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';
import { Team } from '../database/db';

interface GameContextData {
  currentTeam: Team | null;
  setCurrentTeam: (team: Team) => void;
  money: number;
  setMoney: (value: number) => void;
  season: number;
  setSeason: (value: number) => void;
}

const GameContext = createContext<GameContextData>({} as GameContextData);

export function GameProvider({ children }: { children: ReactNode }) {
  const [currentTeam, setCurrentTeam] = useState<Team | null>(null);
  const [money, setMoney] = useState(1000000); // Começa com 1 milhão
  const [season, setSeason] = useState(2024);

  return (
    <GameContext.Provider
      value={{
        currentTeam,
        setCurrentTeam,
        money,
        setMoney,
        season,
        setSeason,
      }}
    >
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