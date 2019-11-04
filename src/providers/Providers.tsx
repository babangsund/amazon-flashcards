import React from 'react';

// project
import StyleProvider from './StyleProvider';

type Props = {
  children: React.ReactNode;
};

const Providers: React.FC<Props> = ({ children }: Props) => (
  <StyleProvider>{children}</StyleProvider>
);

export default Providers;
