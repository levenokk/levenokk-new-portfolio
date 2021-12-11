import { TypographyOptions } from '@mui/material/styles/createTypography';

export const typography: TypographyOptions = {
  fontFamily: 'Roboto, sans-serif',
  h1: {
    fontSize: 58,
    fontWeight: 'bold',
    letterSpacing: '0.04em',
    lineHeight: 1.18,
    marginBottom: 23,
    fontFamily: 'Rubik, sans-serif',
    '@media (max-width:992px)': {
      fontSize: 42,
    },
    '@media (max-width:460px)': {
      fontSize: 38,
    },
    '@media (max-width:360px)': {
      fontSize: 34,
    },
  },
  h2: {
    fontFamily: 'Rubik, sans-serif',
    fontWeight: 'bold',
    fontSize: 45,
    lineHeight: 1.17,
    letterSpacing: 0.04,
    '@media (max-width:992px)': {
      fontSize: 38,
    },
    '@media (max-width:460px)': {
      fontSize: 32,
    },
    '@media (max-width:360px)': {
      fontSize: 30,
    },
  },
  h3: {
    fontFamily: 'Rubik, sans-serif',
    fontWeight: 'bold',
    fontSize: 35,
    lineHeight: 41 / 35,
    '@media (max-width:992px)': {
      fontSize: 32,
    },
    '@media (max-width:460px)': {
      fontSize: 30,
    },
    '@media (max-width:360px)': {
      fontSize: 28,
    },
  },
  h5: {
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 1.3,
    textAlign: 'center',
  },
  body1: {
    fontSize: 16,
    letterSpacing: '0.04em',
    fontWeight: 300,
  },
  body2: {
    fontSize: 18,
    letterSpacing: '0.04em',
    fontWeight: 300,
    fontFamily: 'Rubik, sans-serif',
    '@media (max-width:460px)': {
      fontSize: 16,
    },
  },
};
