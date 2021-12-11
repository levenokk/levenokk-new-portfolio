import { makeStyles } from '@mui/styles';

import { theme } from '../../../theme/theme';

export const useStyles = makeStyles({
  wrapper: {
    paddingTop: 100,
    paddingBottom: 110,
    backgroundColor: 'rgba(0, 106, 242, 0.03)',
    [theme.breakpoints.down('tablet')]: {
      paddingTop: 100 / 2,
      paddingBottom: 110 / 2,
    },
  },
  projects: {
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
  },
  icon: {
    width: 28,
    height: 28,
  },
});
