import React from 'react';
import { styled } from '../providers/StyleProvider';

// project
import Card from './Card';

type CardsProps = {
  items: string[];
  selected: number;
};

const StyledCards = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: ${(p): string => p.theme.factor(2)};
`;

const Cards: React.FC<CardsProps> = ({ items, selected }: CardsProps) => {
  const length = items.length;
  const half = Math.floor(length / 2) - 1;

  function modIndex(i: number): number {
    return (i + length) % length;
  }

  function getPos(index: number): number {
    return modIndex(index - selected + length + half) - half;
  }

  return (
    <StyledCards>
      {items.map((content, index) => (
        <Card
          key={content}
          content={content}
          number={index + 1}
          pos={getPos(index)}
        />
      ))}
    </StyledCards>
  );
};

export default Cards;
