import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  Typography,
  Box,
  Button,
  LinearProgress,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { db, Team, Player } from '../database/db';
import Header from '../components/Header';

interface MatchEvent {
  minute: number;
  description: string;
  type: 'goal' | 'card' | 'substitution' | 'other';
}

const Match = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [minute, setMinute] = useState(0);
  const [events, setEvents] = useState<MatchEvent[]>([]);
  const [score, setScore] = useState({ home: 0, away: 0 });
  const [homeTeam, setHomeTeam] = useState<Team | null>(null);
  const [homePlayers, setHomePlayers] = useState<Player[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadTeamData = async () => {
      try {
        const teams = await db.teams.toArray();
        if (teams.length > 0) {
          setHomeTeam(teams[0]);
          const players = await db.players
            .where('teamId')
            .equals(teams[0].id!)
            .toArray();
          setHomePlayers(players);
        }
      } catch (error) {
        console.error('Erro ao carregar dados do time:', error);
      }
    };

    loadTeamData();
  }, []);

  const simulateMatch = () => {
    setIsPlaying(true);
    const matchInterval = setInterval(() => {
      setMinute((prev) => {
        if (prev >= 90) {
          clearInterval(matchInterval);
          setIsPlaying(false);
          return 90;
        }
        
        // Chance de gerar um evento a cada minuto
        if (Math.random() < 0.1) {
          const newEvent = generateMatchEvent(prev);
          setEvents((prevEvents) => [...prevEvents, newEvent]);
          
          if (newEvent.type === 'goal') {
            const team = newEvent.description.includes('Casa') ? 'home' : 'away';
            setScore((prevScore) => ({
              ...prevScore,
              [team]: prevScore[team] + 1,
            }));
          }
        }
        
        return prev + 1;
      });
    }, 1000);
  };

  const generateMatchEvent = (currentMinute: number): MatchEvent => {
    const events = [
      {
        type: 'goal' as const,
        descriptions: homePlayers.length > 0 ? [
          `GOOOOL! ${homePlayers[Math.floor(Math.random() * homePlayers.length)].name} marca um golaço para o time da Casa!`,
          'GOOOOL! Time Visitante marca de contra-ataque!'
        ] : [
          'GOOOOL! Time da Casa marca após bela jogada!',
          'GOOOOL! Time Visitante marca de contra-ataque!'
        ]
      },
      {
        type: 'card' as const,
        descriptions: homePlayers.length > 0 ? [
          `Cartão amarelo para ${homePlayers[Math.floor(Math.random() * homePlayers.length)].name} do time da Casa`,
          'Cartão amarelo para o jogador do time Visitante'
        ] : [
          'Cartão amarelo para o jogador do time da Casa',
          'Cartão amarelo para o jogador do time Visitante'
        ]
      },
      {
        type: 'other' as const,
        descriptions: [
          'Escanteio para o time da Casa',
          'Falta perigosa próxima à área',
          'Boa defesa do goleiro!'
        ]
      }
    ];

    const eventType = events[Math.floor(Math.random() * events.length)];
    const description = eventType.descriptions[Math.floor(Math.random() * eventType.descriptions.length)];

    return {
      minute: currentMinute,
      description,
      type: eventType.type
    };
  };

  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Paper sx={{ p: 4 }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h4" gutterBottom>
              {homeTeam?.name || 'Time da Casa'} {score.home} x {score.away} Time Visitante
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {minute}&apos; minutos
            </Typography>
            <LinearProgress 
              variant="determinate" 
              value={(minute / 90) * 100} 
              sx={{ mt: 2, mb: 2 }}
            />
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Eventos da Partida
                  </Typography>
                  <Box sx={{ maxHeight: 300, overflow: 'auto' }}>
                    {events.map((event, index) => (
                      <Typography key={index} color={event.type === 'goal' ? 'error' : 'text.primary'}>
                        {event.minute}&apos; - {event.description}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Controles
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={simulateMatch}
                    disabled={isPlaying}
                    sx={{ mb: 2 }}
                  >
                    {isPlaying ? 'Jogo em Andamento' : 'Iniciar Partida'}
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    onClick={() => navigate('/team')}
                    disabled={isPlaying}
                  >
                    Voltar para o Time
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default Match; 