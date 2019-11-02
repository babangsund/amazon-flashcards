import React from 'react';

// project
import StyleProvider from './StyleProvider';

type Props = {
  children: React.ReactNode;
};

const Providers: React.FC<Props> = ({ children }) => (
  <StyleProvider>{children}</StyleProvider>
);

export default Providers;
