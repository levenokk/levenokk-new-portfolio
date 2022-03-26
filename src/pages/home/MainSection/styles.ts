import { Box, BoxProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const LeftWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  maxWidth: 600,
  [theme.breakpoints.down('desktop')]: {
    maxWidth: 420,
  },
  [theme.breakpoints.down('laptop')]: {
    maxWidth: '100%',
  },
}));

export const Wrapper = styled('main')(({ theme }) => ({
  paddingTop: 317,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 70,
  [theme.breakpoints.down('desktop')]: {
    paddingTop: 217,
  },
  [theme.breakpoints.down('laptop')]: {
    flexDirection: 'column-reverse',
  },
  [theme.breakpoints.down('tablet')]: {
    paddingTop: 117,
    marginBottom: 35,
  },
}));

export const ButtonsWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  maxWidth: 460,
  [theme.breakpoints.down('mobile')]: {
    maxWidth: '100%',
    flexDirection: 'column',
  },
}));

export const RightWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  flexGrow: 0.8,
  [theme.breakpoints.down('laptop')]: {
    flexGrow: 1,
    width: '70%',
  },
  [theme.breakpoints.down('mobile')]: {
    flexGrow: 1,
    width: '90%',
  },
}));
