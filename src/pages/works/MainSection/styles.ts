import { Box, BoxProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)<BoxProps>(({ theme }) => ({
  paddingTop: 200,
  marginBottom: 80,
  [theme.breakpoints.down('tablet')]: {
    paddingTop: 120,
    marginBottom: 40,
  },
}));

export const Projects = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  columnGap: '28px',
  rowGap: '28px',
  marginBottom: 40,
  [theme.breakpoints.down('desktop')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.down('tablet')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
}));
