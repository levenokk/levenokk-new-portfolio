import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, BoxProps, IconProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled('section')(({ theme }) => ({
  backgroundColor: 'rgba(0, 106, 242, 0.03)',
  paddingBottom: 110,
  paddingTop: 100,
  [theme.breakpoints.down('laptop')]: {
    paddingBottom: 110 / 2,
    paddingTop: 100 / 2,
  },
}));

export const Projects = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  columnGap: '28px',
  rowGap: '28px',
  marginBottom: 35,
  [theme.breakpoints.down('desktop')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.down('tablet')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
}));

export const Icon = styled(ChevronRightIcon)<IconProps>(() => ({
  width: 28,
  height: 28,
}));
