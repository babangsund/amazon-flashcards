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

const StyledInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${p => p.theme.amazonColors.neutral};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px,
    rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
`;

const StyledCard = styled.div<StyledCardProps>`
  width: 20vw;
  height: 20vw;
  min-width: 20vw;
  position: absolute;
  box-sizing: border-box;
  transition: transform 200ms;
  padding: ${p => p.theme.factor(1)};
  transform: translate3d(${(p: StyledCardProps) => p.pos * 100}%, 0, 0);
`;

const Card: React.FC<CardProps> = ({ pos, number, content }) => {
  return (
    <StyledCard pos={pos}>
      <StyledInner>
        <div>#{number}</div>
        <div>{content}</div>
      </StyledInner>
    </StyledCard>
  );
};

export default Card;
