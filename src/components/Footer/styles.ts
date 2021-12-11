import { makeStyles } from '@mui/styles';

import { theme } from '../../theme/theme';

export const useStyles = makeStyles({
  topWrapper: {
    paddingTop: 35,
    paddingBottom: 29,
    backgroundColor: '#D7FFB8',
  },
  socialsWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  socialLink: {
    marginLeft: 23,
  },
  bottomWrapper: {
    paddingTop: 56,
    paddingBottom: 100,
    backgroundColor: '#EEF5FF',
  },
  bottomWrapperInner: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    columnGap: '90px',
    rowGap: '30px',
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
  },
});
