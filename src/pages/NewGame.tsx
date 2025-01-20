import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  Paper,
  Grid,
  Card,
  CardContent,
  Chip,
  Divider,
} from '@mui/material';
import {
  SportsSoccer as SoccerIcon,
  EmojiEvents as TrophyIcon,
  Group as FansIcon,
  Stadium as StadiumIcon,
  AttachMoney as MoneyIcon,
  Flag as FlagIcon,
  Star as StarIcon,
  Timeline as TimelineIcon,
  Apartment as CityIcon,
  Person as ManagerIcon
} from '@mui/icons-material';
import { useGame } from '../contexts/GameContext';
import { europeanLeagues } from '../data/europeanLeagues';
import { League, Club } from '../types/game';
import Logo from '../components/Logo';

type Difficulty = 'easy' | 'normal' | 'hard';

const initialMoneyMap = {
  easy: 5000000,
  normal: 3000000,
  hard: 1000000,
};

const baseSkillMap = {
  easy: 75,
  normal: 70,
  hard: 65,
};

export default function NewGame() {
  const navigate = useNavigate();
  const { createTeam } = useGame();
  const [managerName, setManagerName] = useState('');
  const [difficulty, setDifficulty] = useState<Difficulty>('normal');
  const [selectedLeague, setSelectedLeague] = useState<League | null>(null);
  const [selectedClub, setSelectedClub] = useState<Club | null>(null);

  const handleCreateTeam = () => {
    if (!managerName.trim() || !selectedClub) return;

    createTeam({
      name: selectedClub.name,
      money: initialMoneyMap[difficulty],
      baseSkill: baseSkillMap[difficulty],
      manager: managerName
    });

    navigate('/team');
  };

  const handleManagerNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setManagerName(event.target.value);
  };

  const handleDifficultyChange = (event: SelectChangeEvent<Difficulty>) => {
    setDifficulty(event.target.value as Difficulty);
  };

  const handleLeagueChange = (event: SelectChangeEvent<number>) => {
    const league = europeanLeagues.find(l => l.id === event.target.value);
    setSelectedLeague(league || null);
    setSelectedClub(null);
  };

  const handleClubChange = (event: SelectChangeEvent<number>) => {
    const club = selectedLeague?.clubs.find(c => c.id === event.target.value);
    setSelectedClub(club || null);
  };

  return (
    <Container maxWidth="lg" className="fade-in" sx={{ px: { xs: 2, sm: 3 } }}>
      <Box sx={{ 
        mt: { xs: 2, sm: 4 }, 
        mb: { xs: 4, sm: 8 }, 
        display: 'flex', 
        justifyContent: 'center' 
      }}>
        <Logo />
      </Box>

      <Grid container spacing={{ xs: 2, sm: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: { xs: 2, sm: 4 },
              borderRadius: { xs: '16px', sm: '24px' }
            }} 
            className="glass"
          >
            <Typography 
              variant="h5" 
              gutterBottom 
              color="primary"
              sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}
            >
              Crie Sua História
            </Typography>

            <FormControl fullWidth sx={{ mb: { xs: 2, sm: 3 } }}>
              <InputLabel>Liga</InputLabel>
              <Select
                value={selectedLeague?.id || ''}
                label="Liga"
                onChange={handleLeagueChange}
                sx={{ 
                  height: { xs: '45px', sm: '56px' },
                  '& .MuiSelect-select': {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  },
                  '& .MuiMenuItem-root': {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }
                }}
              >
                {europeanLeagues.map(league => (
                  <MenuItem 
                    key={league.id} 
                    value={league.id}
                    sx={{
                      py: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(0,255,136,0.1)',
                        transform: 'translateX(8px)'
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%' }}>
                      <Box 
                        sx={{ 
                          position: 'relative',
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: `linear-gradient(135deg, #00ff88, #00ff8822)`,
                          boxShadow: '0 2px 8px rgba(0,255,136,0.2)'
                        }}
                      >
                        <FlagIcon sx={{ fontSize: 24, color: '#fff' }} />
                      </Box>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{league.name}</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Typography variant="caption" color="text.secondary">
                            {league.country}
                          </Typography>
                          <StarIcon sx={{ fontSize: 12, color: 'primary.main' }} />
                          <Typography variant="caption" color="text.secondary">
                            {league.reputation}
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 0.5 }}>
                        <Chip 
                          icon={<TrophyIcon sx={{ fontSize: 16 }} />}
                          label={`${league.clubs.length} clubes`}
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                        <Typography variant="caption" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <TimelineIcon sx={{ fontSize: 12 }} />
                          {league.seasonDates.start.split('-')[0]}
                        </Typography>
                      </Box>
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: { xs: 2, sm: 3 } }}>
              <InputLabel>Clube</InputLabel>
              <Select
                value={selectedClub?.id || ''}
                label="Clube"
                onChange={handleClubChange}
                disabled={!selectedLeague}
                sx={{ 
                  height: { xs: '45px', sm: '56px' },
                  '& .MuiSelect-select': {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }
                }}
              >
                {selectedLeague?.clubs.map(club => (
                  <MenuItem 
                    key={club.id} 
                    value={club.id}
                    sx={{
                      py: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: `${club.colors.primary}11`,
                        transform: 'translateX(8px)'
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                      <Box 
                        sx={{ 
                          width: 45,
                          height: 45,
                          borderRadius: '50%',
                          background: `linear-gradient(45deg, ${club.colors.primary}, ${club.colors.secondary})`,
                          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            inset: 2,
                            borderRadius: '50%',
                            background: `linear-gradient(135deg, ${club.colors.primary}22, ${club.colors.secondary}22)`,
                            backdropFilter: 'blur(4px)'
                          }
                        }}
                      >
                        <Typography variant="caption" sx={{ color: '#fff', fontWeight: 'bold', zIndex: 1 }}>
                          {club.shortName}
                        </Typography>
                      </Box>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{club.name}</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <CityIcon sx={{ fontSize: 12, color: 'text.secondary' }} />
                          <Typography variant="caption" color="text.secondary">
                            {club.city}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">•</Typography>
                          <Typography variant="caption" color="text.secondary">
                            {club.yearFounded}
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                        <Box sx={{ display: 'flex', gap: 0.5 }}>
                          <Chip 
                            icon={<TrophyIcon sx={{ fontSize: 16 }} />}
                            label={club.achievements.leagueTitles + club.achievements.cupTitles + club.achievements.continentalTitles}
                            size="small"
                            variant="outlined"
                            color="secondary"
                            sx={{ minWidth: 80 }}
                          />
                          <Chip 
                            icon={<MoneyIcon sx={{ fontSize: 16 }} />}
                            label={`${(club.budget / 1000000).toFixed(0)}M`}
                            size="small"
                            variant="outlined"
                            color="primary"
                            sx={{ minWidth: 80 }}
                          />
                        </Box>
                        <Box sx={{ display: 'flex', gap: 0.5 }}>
                          <Chip 
                            icon={<ManagerIcon sx={{ fontSize: 16 }} />}
                            label={club.manager.name.split(' ')[0]}
                            size="small"
                            variant="outlined"
                            sx={{ 
                              minWidth: 80,
                              borderColor: club.colors.primary,
                              color: club.colors.primary
                            }}
                          />
                          <Chip 
                            icon={<StarIcon sx={{ fontSize: 16 }} />}
                            label={club.reputation}
                            size="small"
                            variant="outlined"
                            sx={{ 
                              minWidth: 80,
                              borderColor: club.colors.secondary,
                              color: club.colors.secondary
                            }}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Nome do Treinador"
              variant="outlined"
              fullWidth
              value={managerName}
              onChange={handleManagerNameChange}
              sx={{ 
                mb: { xs: 2, sm: 3 },
                '& .MuiOutlinedInput-root': {
                  height: { xs: '45px', sm: '56px' },
                  '&:hover fieldset': {
                    borderColor: 'primary.main',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'primary.main',
                    borderWidth: 2
                  }
                }
              }}
            />

            <FormControl fullWidth sx={{ mb: { xs: 2, sm: 3 } }}>
              <InputLabel>Dificuldade</InputLabel>
              <Select
                value={difficulty}
                label="Dificuldade"
                onChange={handleDifficultyChange}
                sx={{ 
                  height: { xs: '45px', sm: '56px' },
                  '& .MuiSelect-select': {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  },
                  '& .MuiMenuItem-root': {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }
                }}
              >
                <MenuItem 
                  value="easy"
                  sx={{
                    py: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(76,175,80,0.1)',
                      transform: 'translateX(8px)'
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                    <Box 
                      sx={{ 
                        width: 45,
                        height: 45,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #4CAF50, #81C784)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 2px 8px rgba(76,175,80,0.2)'
                      }}
                    >
                      <SoccerIcon sx={{ color: '#fff', fontSize: 24 }} />
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Fácil</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <MoneyIcon sx={{ fontSize: 12, color: 'success.main' }} />
                        <Typography variant="caption" color="text.secondary">
                          R$ {(initialMoneyMap.easy / 1000000).toFixed(1)}M
                        </Typography>
                        <Typography variant="caption" color="text.secondary">•</Typography>
                        <StarIcon sx={{ fontSize: 12, color: 'success.main' }} />
                        <Typography variant="caption" color="text.secondary">
                          {baseSkillMap.easy}
                        </Typography>
                      </Box>
                    </Box>
                    <Chip 
                      label="Recomendado"
                      size="small"
                      color="success"
                      variant="outlined"
                    />
                  </Box>
                </MenuItem>
                <MenuItem 
                  value="normal"
                  sx={{
                    py: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(33,150,243,0.1)',
                      transform: 'translateX(8px)'
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                    <Box 
                      sx={{ 
                        width: 45,
                        height: 45,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #2196F3, #64B5F6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 2px 8px rgba(33,150,243,0.2)'
                      }}
                    >
                      <SoccerIcon sx={{ color: '#fff', fontSize: 24 }} />
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Normal</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <MoneyIcon sx={{ fontSize: 12, color: 'primary.main' }} />
                        <Typography variant="caption" color="text.secondary">
                          R$ {(initialMoneyMap.normal / 1000000).toFixed(1)}M
                        </Typography>
                        <Typography variant="caption" color="text.secondary">•</Typography>
                        <StarIcon sx={{ fontSize: 12, color: 'primary.main' }} />
                        <Typography variant="caption" color="text.secondary">
                          {baseSkillMap.normal}
                        </Typography>
                      </Box>
                    </Box>
                    <Chip 
                      label="Desafiador"
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                  </Box>
                </MenuItem>
                <MenuItem 
                  value="hard"
                  sx={{
                    py: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(244,67,54,0.1)',
                      transform: 'translateX(8px)'
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                    <Box 
                      sx={{ 
                        width: 45,
                        height: 45,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #F44336, #E57373)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 2px 8px rgba(244,67,54,0.2)'
                      }}
                    >
                      <SoccerIcon sx={{ color: '#fff', fontSize: 24 }} />
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Difícil</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <MoneyIcon sx={{ fontSize: 12, color: 'error.main' }} />
                        <Typography variant="caption" color="text.secondary">
                          R$ {(initialMoneyMap.hard / 1000000).toFixed(1)}M
                        </Typography>
                        <Typography variant="caption" color="text.secondary">•</Typography>
                        <StarIcon sx={{ fontSize: 12, color: 'error.main' }} />
                        <Typography variant="caption" color="text.secondary">
                          {baseSkillMap.hard}
                        </Typography>
                      </Box>
                    </Box>
                    <Chip 
                      label="Veterano"
                      size="small"
                      color="error"
                      variant="outlined"
                    />
                  </Box>
                </MenuItem>
              </Select>
            </FormControl>

            <Button
              variant="contained"
              size="large"
              fullWidth
              onClick={handleCreateTeam}
              disabled={!managerName.trim() || !selectedClub}
              startIcon={<SoccerIcon />}
              sx={{ 
                height: { xs: '45px', sm: '56px' },
                fontSize: { xs: '1rem', sm: '1.1rem' },
                fontWeight: 'bold',
                borderRadius: '12px'
              }}
              className="glow"
            >
              Iniciar Jornada
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          {selectedClub ? (
            <Card 
              elevation={3} 
              className="glass fade-in"
              sx={{ 
                borderRadius: { xs: '16px', sm: '24px' },
                height: '100%',
                background: `linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.95)), linear-gradient(45deg, ${selectedClub.colors.primary}22, ${selectedClub.colors.secondary}22)`
              }}
            >
              <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                <Box sx={{ mb: 3 }}>
                  <Typography 
                    variant="h5" 
                    gutterBottom 
                    color="primary"
                    sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}
                  >
                    {selectedClub.name}
                  </Typography>
                  <Typography 
                    variant="subtitle1" 
                    color="text.secondary" 
                    gutterBottom
                    sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
                  >
                    {selectedClub.city}, {selectedClub.country}
                  </Typography>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom color="primary">
                    História do Clube
                  </Typography>
                  {selectedClub.history.map((event) => (
                    <Paper 
                      key={event.id}
                      elevation={2}
                      sx={{ 
                        p: 2, 
                        mb: 1, 
                        background: 'rgba(255,255,255,0.05)',
                        borderLeft: '4px solid',
                        borderColor: (event.impact.reputation ?? 0) > 0 ? 'success.main' : 'error.main'
                      }}
                    >
                      <Typography variant="subtitle2" color="primary">
                        {event.year} - {event.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {event.description}
                      </Typography>
                    </Paper>
                  ))}
                </Box>

                <Box sx={{ my: { xs: 1.5, sm: 2 } }}>
                  <Grid container spacing={{ xs: 1, sm: 2 }}>
                    <Grid item xs={6}>
                      <Chip
                        icon={<MoneyIcon />}
                        label={`R$ ${(selectedClub.budget / 1000000).toFixed(1)}M`}
                        color="primary"
                        variant="outlined"
                        sx={{ 
                          width: '100%',
                          height: { xs: '32px', sm: '40px' }
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Chip
                        icon={<TrophyIcon />}
                        label={`${selectedClub.achievements.leagueTitles + selectedClub.achievements.cupTitles + selectedClub.achievements.continentalTitles} Títulos`}
                        color="secondary"
                        variant="outlined"
                        sx={{ 
                          width: '100%',
                          height: { xs: '32px', sm: '40px' }
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Chip
                        icon={<StadiumIcon />}
                        label={`${selectedClub.stadium.name}`}
                        color="info"
                        variant="outlined"
                        sx={{ 
                          width: '100%',
                          height: { xs: '32px', sm: '40px' }
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Chip
                        icon={<FansIcon />}
                        label={`${(selectedClub.fanbase / 1000000).toFixed(1)}M`}
                        color="success"
                        variant="outlined"
                        sx={{ 
                          width: '100%',
                          height: { xs: '32px', sm: '40px' }
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Divider sx={{ my: { xs: 1.5, sm: 2 } }} />

                <Box>
                  <Typography 
                    variant="body1" 
                    paragraph
                    sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
                  >
                    Dificuldade: <strong>{difficulty.toUpperCase()}</strong>
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
                  >
                    • Orçamento Inicial: R$ {(initialMoneyMap[difficulty] / 1000000).toFixed(1)}M
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
                  >
                    • Habilidade Base: {baseSkillMap[difficulty]}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
                  >
                    • Técnico: {selectedClub.manager.name} ({selectedClub.manager.nationality})
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ) : (
            <Paper 
              elevation={3} 
              sx={{ 
                p: { xs: 2, sm: 4 }, 
                height: '100%',
                borderRadius: { xs: '16px', sm: '24px' }
              }} 
              className="glass"
            >
              <Typography 
                variant="h5" 
                gutterBottom 
                color="primary"
                sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}
              >
                Escolha Seu Destino
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary"
                sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
              >
                Selecione uma liga e um clube para começar sua jornada no mundo do futebol. Cada clube tem sua própria história, desafios e objetivos únicos.
              </Typography>
            </Paper>
          )}
        </Grid>
      </Grid>
    </Container>
  );
} 