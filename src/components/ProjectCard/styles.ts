import { Box, BoxProps, Button as MButton, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import NextImage, { ImageProps } from 'next/image';

export const Image = styled(NextImage)<ImageProps>(() => ({
  borderRadius: 10,
}));

interface StyledButtonProps extends ButtonProps {
  isActive: boolean;
}

export const Button = styled(MButton)<StyledButtonProps>(
  ({ isActive, theme }) => ({
    width: 60,
    minWidth: 40,
    height: 60,
    borderRadius: '50%',
    transform: `rotate(${isActive ? 270 : 0}deg)`,
    [theme.breakpoints.down('mobile')]: {
      width: 50,
      height: 50,
    },
  }),
);

export const ButtonWrapper = styled(Box)<BoxProps>(() => ({
  position: 'relative',
  zIndex: 3,
  textAlign: 'center',
  transform: 'translateY(-50%)',
}));

interface DescriptionProps extends BoxProps {
  isActive: boolean;
}

export const Description = styled(Box)<DescriptionProps>(({ isActive }) => ({
  borderRadius: 10,
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  top: 0,
  zIndex: 2,
  transform: `scale(${isActive ? 1 : 0.5})`,
  opacity: isActive ? 1 : 0,
  transition: 'all .3s',
  overflow: 'auto',
  background:
    'linear-gradient(0deg, rgba(0, 106, 242, 0.8), rgba(0, 106, 242, 0.8))',
}));

export const DescriptionWrapper = styled(Box)(({ theme }) => {
  return {
    padding: '26px 40px',
    [theme.breakpoints?.down('tablet')]: {
      padding: '16px 20px',
    },
  };
});

export const ImageWrapper = styled(Box)<BoxProps>(() => ({
  height: '270px',
}));

export const Link = styled('a')(({ theme }) => ({
  textDecoration: 'none',
  color: 'inherit',
  cursor: 'pointer',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: 'block',
  width: '100%',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));
