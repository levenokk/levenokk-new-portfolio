import { makeStyles } from '@mui/styles';

import { theme } from '../../../theme/theme';

export const useStyles = makeStyles({
  wrapper: {
    marginBottom: 113,
    [theme.breakpoints.down('tablet')]: {
      marginBottom: 113 / 2,
    },
  },
  contentWrapper: {
    marginTop: 40,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('laptop')]: {
      flexDirection: 'column',
    },
  },
  imageWrapper: {
    flexGrow: 1,
    marginRight: 50,
    [theme.breakpoints.down('laptop')]: {
      marginRight: 0,
      width: '70%',
      marginBottom: 20,
    },
    [theme.breakpoints.down('mobile')]: {
      width: '90%',
    },
  },
  content: {
    maxWidth: 700,
    flexGrow: 1,
    [theme.breakpoints.down('desktop')]: {
      maxWidth: 540,
    },
    [theme.breakpoints.down('laptop')]: {
      maxWidth: '100%',
    },
  },
  grid: {
    marginTop: 16,
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    rowGap: '16px',
    marginBottom: 32,
    [theme.breakpoints.down('desktop')]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  },
  socialsWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: -5,
  },
  socialLink: {
    marginLeft: 23,
  },
  link: {
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    color: 'inherit',
    fontSize: 'inherit',
    fontFamily: 'inherit',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
});
