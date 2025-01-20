import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useGame } from '../contexts/GameContext';
import { db } from '../database/db';
import type { Player } from '../database/db';

export default function Team() {
  const navigate = useNavigate();
  const { gameState } = useGame();
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    if (!gameState?.team) {
      navigate('/');
      return;
    }

    const loadPlayers = async () => {
      if (!gameState?.team?.id) return;
      const teamPlayers = await db.players.where('teamId').equals(gameState.team.id).toArray();
      setPlayers(teamPlayers);
    };

    loadPlayers();
  }, [gameState, navigate]);

  const handlePlayMatch = () => {
    navigate('/match');
  };

  if (!gameState?.team) return null;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Box>
            <Typography variant="h4" gutterBottom>{gameState.team.name}</Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Treinador: {gameState.team.manager}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Dinheiro: R$ {gameState.money.toLocaleString()}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handlePlayMatch}
              fullWidth
            >
              Jogar Partida
            </Button>
          </Box>
        </Box>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell align="right">Posição</TableCell>
                <TableCell align="right">Habilidade</TableCell>
                <TableCell align="right">Energia</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {players.map((player) => (
                <TableRow key={player.id}>
                  <TableCell component="th" scope="row">
                    {player.name}
                  </TableCell>
                  <TableCell align="right">{player.position}</TableCell>
                  <TableCell align="right">{player.skill}</TableCell>
                  <TableCell align="right">{player.energy}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
} 