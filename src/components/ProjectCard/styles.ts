import { makeStyles } from '@mui/styles';

import { theme } from '../../theme/theme';

type Props = {
  isShowDescription: boolean;
};

export const useStyles = makeStyles({
  image: {
    borderRadius: 10,
  },
  button: (props: Props) => ({
    width: 64,
    height: 64,
    borderRadius: '50%',
    transform: `rotate(${props.isShowDescription ? 270 : 0}deg)`,
  }),
  buttonWrapper: {
    position: 'relative',
    zIndex: 3,
    textAlign: 'center',
    transform: 'translateY(-50%)',
  },
  description: (props) => ({
    borderRadius: 10,
    position: 'absolute',
    left: 0,
    bottom: 0,
    top: 0,
    zIndex: 2,
    padding: '26px 40px',
    transform: `translateY(${props.isShowDescription ? 0 : -20}%)`,
    opacity: props.isShowDescription ? 1 : 0,
    transition: 'opacity .2s linear, transform .1s linear',
    background:
      'linear-gradient(0deg, rgba(0, 106, 242, 0.8), rgba(0, 106, 242, 0.8))',
  }),
  imageWrapper: {
    height: '270px',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
});
