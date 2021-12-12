import { Box, BoxProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled('section')(({ theme }) => ({
  paddingTop: 200,
  marginBottom: 100,
  [theme.breakpoints.down('laptop')]: {
    paddingTop: 140,
    marginBottom: 100 / 2,
  },
}));

export const WrapperTop = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: 20,
  [theme.breakpoints.down('laptop')]: {
    flexDirection: 'column',
  },
}));

export const SliderWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  maxWidth: 516,
  flexGrow: 1,
  paddingBottom: 30,
  [theme.breakpoints.down('desktop')]: {
    maxWidth: 420,
  },
  [theme.breakpoints.down('laptop')]: {
    maxWidth: '70%',
    margin: '0 auto',
    width: '100%',
  },
  [theme.breakpoints.down('mobile')]: {
    maxWidth: '100%',
  },
}));

export const MainContent = styled(Box)<BoxProps>(({ theme }) => ({
  marginLeft: 30,
  flexGrow: 1,
  flexShrink: 1,
  maxWidth: 700,
  [theme.breakpoints.down('laptop')]: {
    maxWidth: '100%',
    margin: 0,
  },
}));

export const LinkWrapper = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: 13,
}));

export const LinksWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 15,
  [theme.breakpoints.down('mobile')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}));

export const WrapperBottom = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  paddingTop: 24,
  justifyContent: 'space-between',
  [theme.breakpoints.down('laptop')]: {
    flexDirection: 'column',
  },
}));

export const LeftItem = styled(Box)<BoxProps>(({ theme }) => ({
  flexGrow: 0.8,
  flexShrink: 1.2,
  [theme.breakpoints.down('laptop')]: {
    flexShrink: 1,
  },
}));

export const RightItem = styled(Box)<BoxProps>(({ theme }) => ({
  flexGrow: 1,
  marginLeft: 30,
  [theme.breakpoints.down('laptop')]: {
    marginLeft: 0,
  },
}));

export const List = styled('ul')(() => ({
  listStyle: 'none',
  paddingLeft: 0,
}));

export const ListItem = styled('li')(() => ({
  position: 'relative',
  paddingLeft: 28,
  marginBottom: 10,
  '&:before': {
    content: '""',
    left: 0,
    top: 8,
    width: 8,
    height: 8,
    position: 'absolute',
    backgroundColor: '#C7FF9C',
    borderRadius: '50%',
  },
}));
