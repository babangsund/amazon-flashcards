import React from 'react';
import { styled } from '../providers/StyleProvider';

type StyledCardProps = {
  pos: number;
};

type CardProps = {
  pos: number;
  number: number;
  content: string;
};

const StyledInner = styled.div<{ flipped: boolean }>`
  width: 100%;
  height: 100%;
  position: relative;
  will-change: transform;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform: ${(p: { flipped: boolean }) =>
    !p.flipped ? '' : 'rotateY(180deg)'};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px,
    rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
`;

const StyledCard = styled.div<StyledCardProps>`
  width: 20vw;
  height: 20vw;
  min-width: 20vw;
  position: absolute;
  box-sizing: border-box;
  will-change: transform;
  transition: transform 200ms;
  padding: ${p => p.theme.factor(1)};
  transform: translate3d(${(p: StyledCardProps) => p.pos * 100}%, 0, 0);
  @media only screen and (max-width: 1440px) {
    width: 33vw;
    height: 33vw;
    min-width: 33vw;
  }
  @media only screen and (max-width: 600px) {
    width: 90vw;
    height: 90vw;
    min-width: 90vw;
  }
`;

const StyledFront = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  backface-visibility: hidden;
  background-color: ${p => p.theme.amazonColors.neutral};
`;

const StyledBack = styled(StyledFront)`
  transform: rotateY(180deg);
`;

const Card: React.FC<CardProps> = ({ pos, number, content }) => {
  const [flipped, setFlipped] = React.useState(false);

  function handleFlip() {
    if (!flipped) {
      setFlipped(true);
      const timeout = setTimeout(() => {
        setFlipped(false);
        clearTimeout(timeout);
      }, 2000);
    }
  }

  return (
    <StyledCard pos={pos} onClick={handleFlip}>
      <StyledInner flipped={flipped}>
        <StyledFront>#{number}</StyledFront>
        <StyledBack>{content}</StyledBack>
      </StyledInner>
    </StyledCard>
  );
};

export default Card;
