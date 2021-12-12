import { Box, BoxProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled('section')(({ theme }) => ({
  marginBottom: 113,
  [theme.breakpoints.down('tablet')]: {
    marginBottom: 113 / 2,
  },
}));
export const ContentWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  marginTop: 40,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.down('laptop')]: {
    flexDirection: 'column',
  },
}));

export const ImageWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  flexGrow: 1,
  marginRight: 50,
  [theme.breakpoints.down('laptop')]: {
    marginRight: 0,
    width: '70%',
    marginBottom: 20,
  },
}));

export const Content = styled(Box)<BoxProps>(({ theme }) => ({
  maxWidth: 700,
  flexGrow: 1,
  [theme.breakpoints.down('desktop')]: {
    maxWidth: 540,
  },
  [theme.breakpoints.down('laptop')]: {
    maxWidth: '100%',
  },
}));

export const Grid = styled(Box)<BoxProps>(({ theme }) => ({
  marginTop: 16,
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  rowGap: '16px',
  marginBottom: 32,
  [theme.breakpoints.down('desktop')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
}));
export const SocialsWrapper = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  alignItems: 'center',
  marginTop: -5,
}));
export const SocialLink = styled('a')(() => ({
  marginLeft: 23,
}));
export const Link = styled('a')(({ theme }) => ({
  whiteSpace: 'nowrap',
  textDecoration: 'none',
  color: 'inherit',
  fontSize: 'inherit',
  fontFamily: 'inherit',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));
