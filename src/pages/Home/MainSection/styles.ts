import { makeStyles } from '@mui/styles';

import { theme } from '../../../theme/theme';

export const useStyles = makeStyles({
  leftWrapper: {
    maxWidth: 580,
    [theme.breakpoints.down('desktop')]: {
      maxWidth: 420,
    },
    [theme.breakpoints.down('laptop')]: {
      maxWidth: '100%',
    },
  },
  wrapper: {
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
    },
  },
  buttonsWrapper: {
    display: 'flex',
    maxWidth: 460,
    [theme.breakpoints.down('mobile')]: {
      maxWidth: '100%',
      flexDirection: 'column',
    },
  },
  rightWrapper: {
    flexGrow: 0.8,
    [theme.breakpoints.down('laptop')]: {
      flexGrow: 1,
      width: '70%',
    },
    [theme.breakpoints.down('mobile')]: {
      flexGrow: 1,
      width: '90%',
    },
  },
});
