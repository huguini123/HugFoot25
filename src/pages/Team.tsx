import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Chip,
  Button,
} from '@mui/material';
import { SportsSoccer as SoccerIcon } from '@mui/icons-material';
import Header from '../components/Header';
import { db, Team, Player } from '../database/db';

const TeamPage: React.FC = () => {
  const navigate = useNavigate();
  const [team, setTeam] = useState<Team | null>(null);
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const loadTeamData = async () => {
      try {
        // Carrega o primeiro time (por enquanto)
        const firstTeam = await db.teams.toArray();
        if (firstTeam.length > 0) {
          setTeam(firstTeam[0]);
          const teamPlayers = await db.players
            .where('teamId')
            .equals(firstTeam[0].id!)
            .toArray();
          setPlayers(teamPlayers);
        }
      } catch (error) {
        console.error('Erro ao carregar dados do time:', error);
      }
    };

    loadTeamData();
  }, []);

  if (!team) {
    return <Typography>Carregando...</Typography>;
  }

  const formatMoney = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h4">
              {team.name}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<SoccerIcon />}
              onClick={() => navigate('/match')}
            >
              Jogar Partida
            </Button>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Chip
              label={`Dinheiro: ${formatMoney(team.money)}`}
              color="primary"
              variant="outlined"
            />
            <Chip
              label={`Reputação: ${team.reputation}`}
              color="secondary"
              variant="outlined"
            />
          </Box>
        </Box>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell>Posição</TableCell>
                <TableCell align="right">Habilidade</TableCell>
                <TableCell align="right">Idade</TableCell>
                <TableCell align="right">Salário</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {players.map((player) => (
                <TableRow key={player.id}>
                  <TableCell>{player.name}</TableCell>
                  <TableCell>{player.position}</TableCell>
                  <TableCell align="right">{player.skill}</TableCell>
                  <TableCell align="right">{player.age}</TableCell>
                  <TableCell align="right">{formatMoney(player.salary)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default TeamPage; 