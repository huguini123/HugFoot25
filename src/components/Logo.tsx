import { Box, styled } from '@mui/material';

const LogoContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
`;

const LogoText = styled(Box)`
  font-family: 'Orbitron', sans-serif;
  font-size: 2.5rem;
  font-weight: bold;
  background: linear-gradient(45deg, #00ff88, #6c63ff);
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 0 0 20px rgba(0,255,136,0.3);
  animation: fadeIn 1s ease-in;
`;

const CharacterContainer = styled(Box)`
  position: relative;
  width: 60px;
  height: 60px;
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`;

const Character = styled(Box)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  background: #fff;
  border-radius: 50% 50% 25% 25%;
  &:before {
    content: '';
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 25px;
    background: #00ff88;
    border-radius: 5px;
  }
`;

const Ball = styled(Box)`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 50%;
  border: 2px solid #000;
  animation: bounce 1s ease-in-out infinite;

  @keyframes bounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(-15px); }
  }

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    border: 1px solid #000;
    border-radius: 50%;
  }
`;

export default function Logo() {
  return (
    <LogoContainer>
      <CharacterContainer>
        <Character />
        <Ball />
      </CharacterContainer>
      <LogoText>HugFoot 25</LogoText>
    </LogoContainer>
  );
} 