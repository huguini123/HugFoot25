import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { GameProvider } from './contexts/GameContext';
import MainMenu from './pages/MainMenu';
import NewGame from './pages/NewGame';
import Team from './pages/Team';
import Match from './pages/Match';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GameProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route path="/new-game" element={<NewGame />} />
            <Route path="/team" element={<Team />} />
            <Route path="/match" element={<Match />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </GameProvider>
    </ThemeProvider>
  );
}

export default App;
