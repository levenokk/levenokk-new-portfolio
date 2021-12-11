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
    right: 20,
    bottom: 20,
    opacity: props.showButton ? 1 : 0,
    transform: `translateY(${props.showButton ? 0 : -20}%)`,
    transition: 'opacity .2s linear, transform .3s linear',
    zIndex: props.showButton ? 50 : -5,
  }),
});
