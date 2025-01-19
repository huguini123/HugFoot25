import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          HugFoot 25
        </Typography>
        <Box>
          <Button color="inherit">Meu Time</Button>
          <Button color="inherit">Campeonato</Button>
          <Button color="inherit">Mercado</Button>
          <Button color="inherit">Finanças</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 