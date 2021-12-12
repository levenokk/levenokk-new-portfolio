import { Button as MButton, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface StyledButtonProps extends ButtonProps {
  isShow: boolean;
}

export const Button = styled(MButton)<StyledButtonProps>(
  ({ theme, isShow }) => ({
    backgroundColor: theme.palette.primary.main,
    minWidth: 44,
    width: 44,
    height: 44,
    borderRadius: '50%',
    position: 'fixed',
    right: 20,
    bottom: 20,
    opacity: isShow ? 1 : 0,
    transform: `translateY(${isShow ? 0 : -20}%)`,
    transition: 'opacity .2s linear, transform .3s linear',
    zIndex: isShow ? 50 : -5,
  }),
);
