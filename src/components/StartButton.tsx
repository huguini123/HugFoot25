import { Button } from '@mui/material';
import { SportsSoccer as SoccerIcon } from '@mui/icons-material';

interface StartButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

export default function StartButton({ onClick, disabled }: StartButtonProps) {
  return (
    <Button
      variant="contained"
      size="large"
      fullWidth
      onClick={onClick}
      disabled={disabled}
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
  );
} 