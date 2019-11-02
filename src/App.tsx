import React from 'react';
import { styled } from './providers/StyleProvider';

// project
import { ReactComponent as ChevronLeft } from './icons/chevron-left-solid.svg';
import { ReactComponent as ChevronRight } from './icons/chevron-right-solid.svg';

type CardProps = {
  key: number;
  pos: number;
  selected: boolean;
  children: React.ReactNode;
};

const lsPrinciples = [
  'Customer Obsession',
  'Ownership',
  'Invent and Simplify',
  'Are Right, A Lot',
  'Learn and Be Curious',
  'Hire and Develop The Best',
  'Insist on the Highest Standards',
  'Think Big',
  'Bias for Action',
  'Frugality',
  'Earn Trust',
  'Dive Deep',
  'Have Backbone; Disagree and Commit',
  'Deliver Results',
];

const COUNT = lsPrinciples.length;

const Left = styled(ChevronLeft)`
  height: ${p => p.theme.factor(3)};
  padding: ${p => p.theme.factor(2)};
`;

const Right = styled(ChevronRight)`
  height: ${p => p.theme.factor(3)};
  padding: ${p => p.theme.factor(2)};
`;

const Container = styled.section`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  max-width: ${p => p.theme.factor(80)}:;
`;

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Cards = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: ${p => p.theme.factor(2)};
`;

const Card = styled.div<CardProps>`
  transition: transform 200ms;
  width: 20vw;
  height: 20vw;
  display: flex;
  min-width: 20vw;
  text-align: center;
  position: absolute;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  left: -${p => p.theme.factor(6)};
  padding: ${p => p.theme.factor(3)};
  background-color: ${p => p.theme.amazonColors.neutral};
  transform: translate3d(${(p: CardProps) => p.pos * 100}%, 0, 0);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px,
    rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
`;

function modIndex(i: number) {
  return (i + COUNT) % COUNT;
}

function App() {
  const [index, setIndex] = React.useState(0);

  function handleIndex(n: number) {
    return () => setIndex(i => modIndex(i + n));
  }

  return (
    <Container>
      <Main>
        <div onClick={handleIndex(-1)}>
          <Left />
        </div>
        <Cards>
          {lsPrinciples.map((p, i) => (
            <Card
              key={i}
              selected={i === index}
              pos={modIndex(i - index + COUNT + 6) - 4}
            >
              <div>#{i + 1}</div>
              <div>{p}</div>
            </Card>
          ))}
        </Cards>
        <div onClick={handleIndex(1)}>
          <Right />
        </div>
      </Main>
    </Container>
  );
}

export default App;
