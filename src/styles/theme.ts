import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4CAF50', // Verde clássico do futebol
      light: '#81C784',
      dark: '#388E3C',
    },
    secondary: {
      main: '#FFC107', // Amarelo para destaques
      light: '#FFD54F',
      dark: '#FFA000',
    },
    background: {
      default: '#1E1E1E', // Fundo escuro como no Elifoot
      paper: '#2D2D2D',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
    },
  },
  typography: {
    fontFamily: '"Press Start 2P", "Roboto Mono", monospace',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      letterSpacing: '0.05em',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    body1: {
      fontFamily: '"Roboto Mono", monospace',
      fontSize: '1rem',
    },
    button: {
      fontFamily: '"Press Start 2P", "Roboto Mono", monospace',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0, // Botões quadrados como no Elifoot
          padding: '12px 24px',
          border: '2px solid',
          '&:hover': {
            borderWidth: '2px',
          },
        },
        contained: {
          boxShadow: '4px 4px 0px rgba(0,0,0,0.2)',
          '&:hover': {
            boxShadow: '2px 2px 0px rgba(0,0,0,0.2)',
            transform: 'translate(2px, 2px)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          border: '2px solid #4CAF50',
          boxShadow: '4px 4px 0px rgba(0,0,0,0.2)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 0,
            fontFamily: '"Roboto Mono", monospace',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          fontFamily: '"Roboto Mono", monospace',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontFamily: '"Roboto Mono", monospace',
          borderBottom: '1px solid #4CAF50',
        },
        head: {
          fontWeight: 'bold',
          backgroundColor: '#388E3C',
          color: '#FFFFFF',
        },
      },
    },
  },
});

export default theme; 