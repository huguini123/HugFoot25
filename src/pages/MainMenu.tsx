import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Button,
  Paper,
  Grid,
  Card,
  CardContent,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Select,
  FormControl,
  SelectChangeEvent,
} from '@mui/material';
import {
  PlayArrow as PlayIcon,
  Settings as SettingsIcon,
  Save as SaveIcon,
  EmojiEvents as TrophyIcon,
  VolumeUp as VolumeIcon,
  Newspaper as NewsIcon,
} from '@mui/icons-material';
import Logo from '../components/Logo';

type Language = 'pt-BR' | 'en-US' | 'es-ES';

const newsItems = [
  {
    id: 1,
    title: "Manchester United contrata estrela brasileira por €120M",
    date: "2024-03-15",
    category: "Transferências"
  },
  {
    id: 2,
    title: "Real Madrid vence Liga dos Campeões em final épica",
    date: "2024-03-14",
    category: "Champions League"
  },
  {
    id: 3,
    title: "Novo recorde de público no Maracanã",
    date: "2024-03-13",
    category: "Nacional"
  }
];

const achievements = [
  {
    id: 1,
    title: "Maior Sequência de Vitórias",
    value: "15 jogos",
    player: "Carlos Silva"
  },
  {
    id: 2,
    title: "Mais Títulos em Uma Temporada",
    value: "4 troféus",
    player: "João Santos"
  },
  {
    id: 3,
    title: "Invencibilidade Recorde",
    value: "38 jogos",
    player: "Pedro Lima"
  }
];

export default function MainMenu() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<Language>('pt-BR');
  const [volume, setVolume] = useState<boolean>(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleLanguageChange = (event: SelectChangeEvent<Language>) => {
    setLanguage(event.target.value as Language);
  };

  const handleVolumeToggle = () => {
    setVolume(!volume);
  };

  const handleSettingsClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSettingsClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container maxWidth="lg" className="fade-in" sx={{ px: { xs: 2, sm: 3 } }}>
      <Box sx={{ 
        mt: { xs: 2, sm: 4 }, 
        mb: { xs: 4, sm: 8 }, 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Logo />
        <Box sx={{ display: 'flex', gap: 1 }}>
          <FormControl size="small">
            <Select
              value={language}
              onChange={handleLanguageChange}
              sx={{ 
                minWidth: 100,
                height: 40,
                backgroundColor: 'rgba(255,255,255,0.05)'
              }}
            >
              <MenuItem value="pt-BR">Português</MenuItem>
              <MenuItem value="en-US">English</MenuItem>
              <MenuItem value="es-ES">Español</MenuItem>
            </Select>
          </FormControl>
          <IconButton 
            onClick={handleVolumeToggle}
            sx={{ 
              backgroundColor: 'rgba(255,255,255,0.05)',
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
            }}
          >
            <VolumeIcon color={volume ? 'primary' : 'disabled'} />
          </IconButton>
          <IconButton 
            onClick={handleSettingsClick}
            sx={{ 
              backgroundColor: 'rgba(255,255,255,0.05)',
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
            }}
          >
            <SettingsIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleSettingsClose}
            PaperProps={{
              sx: {
                backgroundColor: 'rgba(0,0,0,0.9)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)'
              }
            }}
          >
            <MenuItem onClick={handleSettingsClose}>Configurações</MenuItem>
            <MenuItem onClick={handleSettingsClose}>Créditos</MenuItem>
            <MenuItem onClick={handleSettingsClose}>Suporte</MenuItem>
          </Menu>
        </Box>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<PlayIcon />}
              onClick={() => navigate('/new-game')}
              sx={{
                height: 60,
                borderRadius: 2,
                fontSize: '1.1rem',
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #00ff88 30%, #00ff8855 90%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #00ff88 40%, #00ff8866 100%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(0,255,136,0.4)'
                }
              }}
            >
              Novo Jogo
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<SaveIcon />}
              sx={{
                height: 60,
                borderRadius: 2,
                fontSize: '1.1rem',
                borderColor: 'rgba(255,255,255,0.2)',
                '&:hover': {
                  borderColor: 'primary.main',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              Carregar Jogo
            </Button>

            <Paper 
              elevation={3}
              className="glass"
              sx={{ 
                p: 2,
                borderRadius: 2,
                background: 'rgba(0,0,0,0.5)'
              }}
            >
              <Typography variant="h6" gutterBottom color="primary">
                Estatísticas Gerais
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2" color="text.secondary">
                    Jogos Disputados
                  </Typography>
                  <Typography variant="body2" color="primary">
                    248
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2" color="text.secondary">
                    Times Criados
                  </Typography>
                  <Typography variant="body2" color="primary">
                    12
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2" color="text.secondary">
                    Títulos Conquistados
                  </Typography>
                  <Typography variant="body2" color="primary">
                    15
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Grid>

        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper 
                elevation={3}
                className="glass"
                sx={{ 
                  p: 2,
                  borderRadius: 2,
                  background: 'rgba(0,0,0,0.5)'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <NewsIcon color="primary" />
                  <Typography variant="h6" color="primary">
                    Últimas Notícias
                  </Typography>
                </Box>
                <Grid container spacing={2}>
                  {newsItems.map(news => (
                    <Grid item xs={12} key={news.id}>
                      <Card 
                        sx={{ 
                          backgroundColor: 'rgba(255,255,255,0.05)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateX(8px)',
                            backgroundColor: 'rgba(255,255,255,0.08)'
                          }
                        }}
                      >
                        <CardContent>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                            <Typography variant="body1">
                              {news.title}
                            </Typography>
                            <Chip 
                              label={news.category}
                              size="small"
                              color="primary"
                              variant="outlined"
                            />
                          </Box>
                          <Typography variant="caption" color="text.secondary">
                            {new Date(news.date).toLocaleDateString()}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper 
                elevation={3}
                className="glass"
                sx={{ 
                  p: 2,
                  borderRadius: 2,
                  background: 'rgba(0,0,0,0.5)'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <TrophyIcon color="primary" />
                  <Typography variant="h6" color="primary">
                    Hall da Fama
                  </Typography>
                </Box>
                <Grid container spacing={2}>
                  {achievements.map(achievement => (
                    <Grid item xs={12} sm={4} key={achievement.id}>
                      <Card 
                        sx={{ 
                          backgroundColor: 'rgba(255,255,255,0.05)',
                          height: '100%',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            backgroundColor: 'rgba(255,255,255,0.08)'
                          }
                        }}
                      >
                        <CardContent>
                          <Typography variant="body2" color="primary" gutterBottom>
                            {achievement.title}
                          </Typography>
                          <Typography variant="h6" gutterBottom>
                            {achievement.value}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {achievement.player}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
} 