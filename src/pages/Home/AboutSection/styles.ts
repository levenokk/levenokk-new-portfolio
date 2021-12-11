import { makeStyles } from '@mui/styles';

import { theme } from '../../../theme/theme';

export const useStyles = makeStyles({
  wrapper: {
    marginBottom: 113,
  },
  contentWrapper: {
    marginTop: 40,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageWrapper: {
    flexGrow: 1,
    marginRight: 50,
  },
  content: {
    maxWidth: 700,
    flexGrow: 1,
  },
  grid: {
    marginTop: 16,
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    rowGap: '16px',
    marginBottom: 32,
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
    textDecoration: 'none',
    color: 'inherit',
    fontSize: 'inherit',
    fontFamily: 'inherit',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
});
