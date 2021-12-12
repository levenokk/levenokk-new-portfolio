import React from 'react';

import { Wrapper } from './styles';

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return <Wrapper maxWidth='desktop'>{children}</Wrapper>;
};
