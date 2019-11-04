import React from 'react';
import { styled } from './providers/StyleProvider';

// project
import Cards from './components/Cards';
import { COUNT, LS_PRINCIPLES } from './Constants';
import { ReactComponent as ChevronLeft } from './icons/chevron-left-solid.svg';
import { ReactComponent as ChevronRight } from './icons/chevron-right-solid.svg';

const Left = styled(ChevronLeft)`
  z-index: 1;
  cursor: pointer;
  height: ${(p): string => p.theme.factor(3)};
  padding: ${(p): string => p.theme.factor(2)};
`;

const Right = styled(ChevronRight)`
  z-index: 1;
  cursor: pointer;
  height: ${(p): string => p.theme.factor(3)};
  padding: ${(p): string => p.theme.factor(2)};
`;

const Container = styled.section`
  height: 100%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
`;

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  align-items: center;
`;

function modIndex(i: number): number {
  return (i + COUNT) % COUNT;
}

const App: React.FC<{}> = () => {
  const [index, setIndex] = React.useState(0);

  function handleIndex(n: number) {
    return (): void => setIndex(i => modIndex(i + n));
  }

  return (
    <Container>
      <Main>
        <Left onClick={handleIndex(-1)} />
        <Cards selected={index} items={LS_PRINCIPLES} />
        <Right onClick={handleIndex(1)} />
      </Main>
    </Container>
  );
};

export default App;
