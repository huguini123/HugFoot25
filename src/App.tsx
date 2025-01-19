import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewGame from './pages/NewGame';
import TeamPage from './pages/Team';
import Match from './pages/Match';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-game" element={<NewGame />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/match" element={<Match />} />
      </Routes>
    </Router>
  );
};

export default App; 