import { Box, BoxProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TopWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  paddingTop: 35,
  paddingBottom: 29,
  backgroundColor: '#D7FFB8',
  [theme.breakpoints.down('tablet')]: {
    paddingTop: 35 / 2,
    paddingBottom: 29 / 2,
  },
}));

export const TopWrapperInner = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.down('mobile')]: {
    flexDirection: 'column',
  },
}));

export const SocialsWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('mobile')]: {
    marginTop: 10,
  },
}));

export const BottomWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  paddingTop: 56,
  paddingBottom: 100,
  backgroundColor: theme.palette.mode === 'light' ? '#EEF5FF' : '#000',
  [theme.breakpoints.down('tablet')]: {
    paddingTop: 56 / 2,
    paddingBottom: 100 / 2,
  },
}));

export const BottomWrapperInner = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  columnGap: '90px',
  rowGap: '30px',
  [theme.breakpoints.down('laptop')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.down('mobile')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
}));

export const FooterList = styled('ul')(() => ({
  listStyle: 'none',
  margin: 0,
  padding: 0,
}));

export const Link = styled('a')(({ theme }) => ({
  color: theme.palette.grey['400'],
  fontSize: 16,
  fontWeight: 300,
  textDecoration: 'none',
  fontFamily: 'Rubik, sans-serif',
  cursor: 'pointer',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

export const SocialLink = styled('a')(() => ({
  marginLeft: 23,
}));

export const ListItem = styled('li')(() => ({
  marginBottom: 10,
}));

export const FooterBottom = styled(Box)<BoxProps>(({ theme }) => ({
  paddingTop: 20,
  paddingBottom: 20,
  backgroundColor: theme.palette.mode === 'light' ? '#E1EDFF' : '#252424',
  [theme.breakpoints.down('tablet')]: {
    paddingTop: 20 / 2,
    paddingBottom: 20 / 2,
  },
}));
