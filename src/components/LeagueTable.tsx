import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

interface TeamStats {
  id: number;
  name: string;
  points: number;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
}

interface LeagueTableProps {
  teams: TeamStats[];
}

export default function LeagueTable({ teams }: LeagueTableProps) {
  const sortedTeams = [...teams].sort((a, b) => {
    // Ordenar por pontos
    if (b.points !== a.points) return b.points - a.points;
    // Desempate por saldo de gols
    if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference;
    // Desempate por gols marcados
    return b.goalsFor - a.goalsFor;
  });

  return (
    <TableContainer component={Paper} sx={{ borderRadius: 2, overflow: 'hidden' }}>
      <Table>
        <TableHead>
          <TableRow sx={{ bgcolor: 'primary.main' }}>
            <TableCell sx={{ color: 'white' }}>Pos</TableCell>
            <TableCell sx={{ color: 'white' }}>Clube</TableCell>
            <TableCell align="center" sx={{ color: 'white' }}>P</TableCell>
            <TableCell align="center" sx={{ color: 'white' }}>J</TableCell>
            <TableCell align="center" sx={{ color: 'white' }}>V</TableCell>
            <TableCell align="center" sx={{ color: 'white' }}>E</TableCell>
            <TableCell align="center" sx={{ color: 'white' }}>D</TableCell>
            <TableCell align="center" sx={{ color: 'white' }}>GP</TableCell>
            <TableCell align="center" sx={{ color: 'white' }}>GC</TableCell>
            <TableCell align="center" sx={{ color: 'white' }}>SG</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedTeams.map((team, index) => (
            <TableRow 
              key={team.id}
              sx={{ 
                '&:nth-of-type(odd)': { bgcolor: 'action.hover' },
                '&:hover': { bgcolor: 'action.selected' }
              }}
            >
              <TableCell>{index + 1}º</TableCell>
              <TableCell>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  {team.name}
                </Typography>
              </TableCell>
              <TableCell align="center">{team.points}</TableCell>
              <TableCell align="center">{team.played}</TableCell>
              <TableCell align="center">{team.won}</TableCell>
              <TableCell align="center">{team.drawn}</TableCell>
              <TableCell align="center">{team.lost}</TableCell>
              <TableCell align="center">{team.goalsFor}</TableCell>
              <TableCell align="center">{team.goalsAgainst}</TableCell>
              <TableCell align="center">{team.goalDifference}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
} 