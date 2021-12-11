import { makeStyles } from '@mui/styles';

import { theme } from '../../theme/theme';

type Props = {
  showButton: boolean;
};

export const useStyles = makeStyles({
  button: (props: Props) => ({
    backgroundColor: theme.palette.primary.main,
    width: 64,
    height: 64,
    borderRadius: '50%',
    position: 'fixed',
    right: 30,
    bottom: 30,
    opacity: props.showButton ? 1 : 0,
  }),
});
