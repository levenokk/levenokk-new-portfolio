import { Box, BoxProps, Button as MButton, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as ScrollLink, LinkProps } from 'react-scroll';

import { theme } from '../../theme/theme';

export const Wrapper = styled(Box)<BoxProps>(() => ({
  position: 'absolute',
  width: '100%',
  top: 40,
  left: 0,
  marginBottom: 70,
  zIndex: 100,
}));

export const WrapperInner = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const Nav = styled(Box)<BoxProps>(() => ({
  [theme.breakpoints.down('laptop')]: {
    display: 'none',
  },
}));

export const Link = styled(ScrollLink)<LinkProps>(() => ({
  color: theme.palette.text.primary,
  fontSize: 18,
  fontWeight: 500,
  letterSpacing: '0.04em',
  textDecoration: 'none',
  fontFamily: 'Roboto, sans-serif',
  cursor: 'pointer',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

export const List = styled('ul')(() => ({
  padding: 0,
  margin: 0,
  listStyle: 'none',
  display: 'flex',
  [theme.breakpoints.down('laptop')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export const ListItem = styled('li')(() => ({
  marginLeft: 70,
  '&:first-child': {
    marginLeft: 0,
  },
  [theme.breakpoints.down('laptop')]: {
    marginLeft: 0,
    marginBottom: 15,
  },
}));

export const Button = styled(MButton)<ButtonProps>(() => ({
  [theme.breakpoints.down('laptop')]: {
    display: 'none',
  },
}));

export const MobileMenu = styled(Box)<BoxProps>(() => ({
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  backgroundColor: theme.palette.background.default,
  paddingTop: '40px',
  padding: '0 15px',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 10,
}));

export const ButtonWrapper = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  paddingTop: 40,
}));

export const MenuWrapperInner = styled(Box)<BoxProps>(() => ({
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
