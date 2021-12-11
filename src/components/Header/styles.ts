import { makeStyles } from '@mui/styles';

import { theme } from '../../theme/theme';

export const useStyles = makeStyles({
  wrapper: {
    position: 'absolute',
    width: '100%',
    top: 40,
    left: 0,
    marginBottom: 70,
    zIndex: 100,
  },
  wrapperInner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nav: {
    [theme.breakpoints.down('laptop')]: {
      display: 'none',
    },
  },
  link: {
    color: theme.palette.text.primary,
    fontSize: 18,
    fontWeight: 500,
    letterSpacing: '0.04em',
    textDecoration: 'none',
    fontFamily: 'Roboto, sans-serif',
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  list: {
    padding: 0,
    margin: 0,
    listStyle: 'none',
    display: 'flex',
    [theme.breakpoints.down('laptop')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  listItem: {
    marginLeft: 70,
    '&:first-child': {
      marginLeft: 0,
    },
    [theme.breakpoints.down('laptop')]: {
      marginLeft: 0,
      marginBottom: 15,
    },
  },
  button: {
    [theme.breakpoints.down('laptop')]: {
      display: 'none',
    },
  },
  mobileMenu: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: theme.palette.background.default,
    paddingTop: '40px',
    padding: '0 15px',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 10,
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  menuWrapperInner: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
