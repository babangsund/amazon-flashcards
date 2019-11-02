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
  height: ${p => p.theme.factor(3)};
  padding: ${p => p.theme.factor(2)};
`;

const Right = styled(ChevronRight)`
  z-index: 1;
  cursor: pointer;
  height: ${p => p.theme.factor(3)};
  padding: ${p => p.theme.factor(2)};
`;

const Container = styled.section`
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
        <Left onClick={handleIndex(-1)} />
        <Cards selected={index} items={LS_PRINCIPLES} />
        <Right onClick={handleIndex(1)} />
      </Main>
    </Container>
  );
}

export default App;
