import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  wrapper: {
    paddingTop: 100,
    paddingBottom: 110,
    backgroundColor: 'rgba(0, 106, 242, 0.03)',
  },
  projects: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    columnGap: '28px',
    rowGap: '28px',
    marginBottom: 35,
  },
  icon: {
    width: 28,
    height: 28,
  },
});
