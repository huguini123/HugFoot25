import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Paper,
  Grid,
  LinearProgress,
  Chip,
  IconButton,
  Button,
} from '@mui/material';
import {
  SportsSoccer as BallIcon,
  Timer as TimerIcon,
  Speed as SpeedIcon,
  Pause as PauseIcon,
  PlayArrow as PlayIcon,
  ArrowBack,
} from '@mui/icons-material';
import { useGame } from '../contexts/GameContext';
import LeagueTable from '../components/LeagueTable';

type MatchEvent = {
  minute: number;
  type: 'goal' | 'card' | 'substitution' | 'chance';
  team: 'home' | 'away';
  description: string;
};

export default function Match() {
  const navigate = useNavigate();
  const { gameState, updateLeagueStats } = useGame();
  const [minute, setMinute] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [score, setScore] = useState({ home: 0, away: 0 });
  const [events, setEvents] = useState<MatchEvent[]>([]);
  const [possession, setPossession] = useState({ home: 60, away: 40 });
  const [isGameOver, setIsGameOver] = useState(false);

  // Função para gerar eventos aleatórios do jogo
  const generateMatchEvent = (currentMinute: number) => {
    const eventTypes = ['goal', 'card', 'substitution', 'chance'] as const;
    
    // Chance maior de gols para o time com maior posse de bola
    const homeTeamAdvantage = possession.home / 100;
    const team = Math.random() < homeTeamAdvantage ? 'home' : 'away';
    
    // Tipo de evento
    const eventType = eventTypes[Math.floor(Math.random() * eventTypes.length)];
    
    let description = '';
    
    switch (eventType) {
      case 'goal':
        setScore(prev => ({
          ...prev,
          [team]: prev[team] + 1
        }));
        description = team === 'home' 
          ? `GOOOL! ${gameState?.team?.name} marca!` 
          : 'GOOOL! O time adversário marca!';
        break;
      case 'card':
        description = team === 'home'
          ? `Cartão amarelo para jogador do ${gameState?.team?.name}`
          : 'Cartão amarelo para jogador do time adversário';
        break;
      case 'substitution':
        description = team === 'home'
          ? `Substituição no ${gameState?.team?.name}`
          : 'Substituição no time adversário';
        break;
      case 'chance':
        description = team === 'home'
          ? `Chance clara de gol para ${gameState?.team?.name}!`
          : 'Chance clara de gol para o time adversário!';
        break;
    }

    const newEvent: MatchEvent = {
      minute: currentMinute,
      type: eventType,
      team,
      description
    };

    setEvents(prev => [newEvent, ...prev]);
  };

  // Atualiza a posse de bola periodicamente
  useEffect(() => {
    if (!isPaused && minute > 0 && minute < 90) {
      const interval = setInterval(() => {
        setPossession(prev => {
          const variation = Math.floor(Math.random() * 5) - 2;
          const newHome = Math.max(30, Math.min(70, prev.home + variation));
          return {
            home: newHome,
            away: 100 - newHome
          };
        });
      }, 10000); // Atualiza a cada 10 segundos

      return () => clearInterval(interval);
    }
  }, [isPaused, minute]);

  // Gera eventos do jogo
  useEffect(() => {
    if (!isPaused && minute > 0 && minute < 90) {
      const shouldGenerateEvent = Math.random() < 0.1; // 10% de chance a cada minuto
      if (shouldGenerateEvent) {
        generateMatchEvent(minute);
      }
    }
  }, [minute]);

  useEffect(() => {
    if (!gameState?.team) {
      navigate('/');
      return;
    }

    const timer = setInterval(() => {
      if (!isPaused) {
        setMinute(prev => {
          if (prev >= 90) {
            clearInterval(timer);
            setIsGameOver(true);
            // Atualizar estatísticas da liga
            updateLeagueStats(
              gameState.team!.name,
              'Adversário',
              score.home,
              score.away
            );
            return 90;
          }
          return prev + 1;
        });
      }
    }, 1000 / speed);

    return () => clearInterval(timer);
  }, [isPaused, speed]);

  const handleTogglePause = () => {
    setIsPaused(prev => !prev);
  };

  const handleSpeedChange = () => {
    setSpeed(prev => (prev === 1 ? 2 : prev === 2 ? 4 : 1));
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper 
        elevation={3}
        className="glass"
        sx={{ 
          p: 3,
          borderRadius: 4,
          background: 'rgba(0,0,0,0.8)',
          backdropFilter: 'blur(10px)'
        }}
      >
        {/* Placar */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          gap: 4,
          mb: 4
        }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" color="primary">
              {gameState?.team?.name}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Casa
            </Typography>
          </Box>
          
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: 2,
            px: 4,
            py: 2,
            borderRadius: 2,
            background: 'rgba(0,0,0,0.5)'
          }}>
            <Typography variant="h3" color="primary">
              {score.home}
            </Typography>
            <BallIcon sx={{ fontSize: 40, color: 'text.secondary' }} />
            <Typography variant="h3" color="primary">
              {score.away}
            </Typography>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" color="primary">
              Adversário
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Fora
            </Typography>
          </Box>
        </Box>

        {/* Controles e Tempo */}
        <Box sx={{ 
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          mb: 3
        }}>
          <IconButton 
            onClick={handleTogglePause}
            sx={{ 
              backgroundColor: 'rgba(255,255,255,0.1)',
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' }
            }}
          >
            {isPaused ? <PlayIcon /> : <PauseIcon />}
          </IconButton>

          <Chip
            icon={<TimerIcon />}
            label={`${minute}'`}
            color="primary"
            variant="outlined"
            sx={{ minWidth: 100 }}
          />

          <IconButton 
            onClick={handleSpeedChange}
            sx={{ 
              backgroundColor: 'rgba(255,255,255,0.1)',
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' }
            }}
          >
            <SpeedIcon />
          </IconButton>
          <Chip
            label={`${speed}x`}
            color="primary"
            variant="outlined"
          />
        </Box>

        {/* Barra de Progresso */}
        <LinearProgress 
          variant="determinate" 
          value={(minute / 90) * 100}
          sx={{ 
            mb: 3,
            height: 8,
            borderRadius: 4,
            backgroundColor: 'rgba(255,255,255,0.1)',
            '& .MuiLinearProgress-bar': {
              background: 'linear-gradient(90deg, #00ff88, #00ff8888)'
            }
          }}
        />

        {/* Estatísticas */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Paper 
              sx={{ 
                p: 2,
                background: 'rgba(255,255,255,0.05)',
                borderRadius: 2
              }}
            >
              <Typography variant="h6" gutterBottom color="primary">
                Eventos da Partida
              </Typography>
              <Box sx={{ maxHeight: 300, overflow: 'auto' }}>
                {events.map((event, index) => (
                  <Box
                    key={index}
                    sx={{
                      p: 1,
                      mb: 1,
                      borderRadius: 1,
                      backgroundColor: 'rgba(255,255,255,0.03)',
                      borderLeft: '4px solid',
                      borderColor: event.type === 'goal' ? 'success.main' : 'primary.main'
                    }}
                  >
                    <Typography variant="body2">
                      {event.minute}' - {event.description}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper 
              sx={{ 
                p: 2,
                background: 'rgba(255,255,255,0.05)',
                borderRadius: 2
              }}
            >
              <Typography variant="h6" gutterBottom color="primary">
                Estatísticas
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Posse de Bola
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="body1">{possession.home}%</Typography>
                    <LinearProgress 
                      variant="determinate" 
                      value={possession.home}
                      sx={{ 
                        flexGrow: 1,
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        '& .MuiLinearProgress-bar': {
                          background: 'linear-gradient(90deg, #00ff88, #00ff8888)'
                        }
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Tabela de Classificação */}
        {isGameOver && (
          <>
            <Box sx={{ mt: 4, mb: 2 }}>
              <Typography variant="h5" color="primary" gutterBottom>
                Classificação
              </Typography>
              <LeagueTable teams={gameState.leagueStats} />
            </Box>

            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 2 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/team')}
                startIcon={<ArrowBack />}
              >
                Voltar ao Time
              </Button>
            </Box>
          </>
        )}
      </Paper>
    </Container>
  );
} 