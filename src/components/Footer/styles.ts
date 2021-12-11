import { makeStyles } from '@mui/styles';

import { theme } from '../../theme/theme';

export const useStyles = makeStyles({
  topWrapper: {
    paddingTop: 35,
    paddingBottom: 29,
    backgroundColor: '#D7FFB8',
    [theme.breakpoints.down('tablet')]: {
      paddingTop: 35 / 2,
      paddingBottom: 29 / 2,
    },
  },
  topWrapperInner: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('mobile')]: {
      flexDirection: 'column',
    },
  },
  socialsWrapper: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('mobile')]: {
      marginTop: 10,
    },
  },
  socialLink: {
    marginLeft: 23,
  },
  bottomWrapper: {
    paddingTop: 56,
    paddingBottom: 100,
    backgroundColor: '#EEF5FF',
    [theme.breakpoints.down('tablet')]: {
      paddingTop: 56 / 2,
      paddingBottom: 100 / 2,
    },
  },
  bottomWrapperInner: {
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
  },
  footerList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  link: {
    color: theme.palette.grey['400'],
    fontSize: 16,
    fontWeight: 300,
    textDecoration: 'none',
    fontFamily: 'Rubik, sans-serif',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  listItem: {
    marginBottom: 10,
  },
  footerBottom: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#E1EDFF',
    [theme.breakpoints.down('tablet')]: {
      paddingTop: 20 / 2,
      paddingBottom: 20 / 2,
    },
  },
});
