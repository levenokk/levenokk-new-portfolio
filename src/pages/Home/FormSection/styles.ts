import { Box, BoxProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled('section')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: 110,
  marginBottom: 100,
  [theme.breakpoints.down('laptop')]: {
    flexDirection: 'column',
    paddingTop: 110 / 2,
    marginBottom: 100 / 2,
  },
}));

export const ImageWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  flexGrow: 1,
  [theme.breakpoints.down('laptop')]: {
    width: '70%',
    marginBottom: 20,
  },
  [theme.breakpoints.down('mobile')]: {
    width: '90%',
  },
}));

export const Content = styled(Box)<BoxProps>(({ theme }) => ({
  marginLeft: 48,
  [theme.breakpoints.down('desktop')]: {
    maxWidth: 450,
  },
  [theme.breakpoints.down('laptop')]: {
    maxWidth: '100%',
    marginLeft: 0,
    flexGrow: 1,
    width: '100%',
  },
}));

export const FormWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  maxWidth: 477,
  [theme.breakpoints.down('laptop')]: {
    maxWidth: '100%',
    width: '100%',
  },
}));
