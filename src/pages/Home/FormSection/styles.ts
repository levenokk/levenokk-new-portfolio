import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 110,
    marginBottom: 100,
  },
  imageWrapper: {
    flexGrow: 1,
  },
  content: {
    marginLeft: 48,
  },
  formWrapper: {
    maxWidth: 477,
  },
});
