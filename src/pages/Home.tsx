import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Box, Card, CardContent } from '@mui/material';
import Header from '../components/Header';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Bem-vindo ao HugFoot 25
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            O melhor jogo de gerenciamento de futebol
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 3 }}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Novo Jogo
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Comece uma nova carreira como técnico
              </Typography>
              <Button 
                variant="contained" 
                color="primary" 
                fullWidth
                onClick={() => navigate('/new-game')}
              >
                Começar
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Continuar
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Continue seu último jogo salvo
              </Typography>
              <Button 
                variant="outlined" 
                color="primary" 
                fullWidth
                onClick={() => navigate('/load-game')}
              >
                Carregar
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default Home; 