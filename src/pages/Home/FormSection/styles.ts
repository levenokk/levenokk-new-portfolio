import { makeStyles } from '@mui/styles';

import { theme } from '../../../theme/theme';

export const useStyles = makeStyles({
  wrapper: {
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
  },
  imageWrapper: {
    flexGrow: 1,
    [theme.breakpoints.down('laptop')]: {
      width: '70%',
      marginBottom: 20,
    },
    [theme.breakpoints.down('mobile')]: {
      width: '90%',
    },
  },
  content: {
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
  },
  formWrapper: {
    maxWidth: 477,
    [theme.breakpoints.down('laptop')]: {
      maxWidth: '100%',
      width: '100%',
    },
  },
});
