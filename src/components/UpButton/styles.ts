import { makeStyles } from '@mui/styles';

import { theme } from '../../theme/theme';

type Props = {
  showButton: boolean;
};

export const useStyles = makeStyles({
  button: (props: Props) => ({
    backgroundColor: theme.palette.primary.main,
    minWidth: 44,
    width: 44,
    height: 44,
    borderRadius: '50%',
    position: 'fixed',
    right: 30,
    bottom: 30,
    opacity: props.showButton ? 1 : 0,
    transform: `translateY(${props.showButton ? 0 : -20}%)`,
    transition: 'opacity .1s, transform .2s',
    zIndex: props.showButton ? 50 : -5,
  }),
});
