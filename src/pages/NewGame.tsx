import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from '@mui/material';
import { db } from '../database/db';
import Header from '../components/Header';

type Difficulty = 'easy' | 'normal' | 'hard';

const NewGame: React.FC = () => {
  const navigate = useNavigate();
  const [teamName, setTeamName] = useState('');
  const [difficulty, setDifficulty] = useState<Difficulty>('normal');

  const initialMoneyMap = {
    easy: 10000000,
    normal: 5000000,
    hard: 2000000
  } as const;

  const baseSkillMap = {
    easy: 75,
    normal: 70,
    hard: 65
  } as const;

  const handleCreateTeam = async () => {
    if (!teamName) return;

    const initialMoney = initialMoneyMap[difficulty];
    const baseSkill = baseSkillMap[difficulty];

    try {
      const teamId = await db.teams.add({
        name: teamName,
        money: initialMoney,
        reputation: 50
      });

      // Criar jogadores iniciais do time
      const positions = ['GOL', 'ZAG', 'ZAG', 'LD', 'LE', 'VOL', 'MC', 'MC', 'PE', 'PD', 'ATA'] as const;

      for (let i = 0; i < positions.length; i++) {
        await db.players.add({
          teamId,
          name: `Jogador ${i + 1}`,
          position: positions[i],
          skill: baseSkill + Math.floor(Math.random() * 10),
          salary: Math.floor(initialMoney * 0.01 / positions.length),
          age: 20 + Math.floor(Math.random() * 15)
        });
      }

      navigate('/team');
    } catch (error) {
      console.error('Erro ao criar time:', error);
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTeamName(e.target.value);
  };

  const handleDifficultyChange = (e: SelectChangeEvent<Difficulty>) => {
    setDifficulty(e.target.value as Difficulty);
  };

  return (
    <>
      <Header />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom align="center">
            Criar Novo Time
          </Typography>

          <Box sx={{ mt: 3 }}>
            <TextField
              fullWidth
              label="Nome do Time"
              value={teamName}
              onChange={handleNameChange}
              sx={{ mb: 3 }}
            />

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Dificuldade</InputLabel>
              <Select
                value={difficulty}
                label="Dificuldade"
                onChange={handleDifficultyChange}
              >
                <MenuItem value="easy">Fácil</MenuItem>
                <MenuItem value="normal">Normal</MenuItem>
                <MenuItem value="hard">Difícil</MenuItem>
              </Select>
            </FormControl>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              onClick={handleCreateTeam}
              disabled={!teamName}
            >
              Criar Time
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default NewGame; 