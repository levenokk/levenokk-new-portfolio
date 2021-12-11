import { Container } from '@mui/material';
import React from 'react';

import { useStyles } from './styles';

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  const classes = useStyles();

  return (
    <Container maxWidth='desktop' className={classes.wrapper}>
      {children}
    </Container>
  );
};
