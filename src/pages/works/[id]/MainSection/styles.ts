import { Box, BoxProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled('section')(() => ({
  paddingTop: 200,
  marginBottom: 100,
}));

export const WrapperTop = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

export const SliderWrapper = styled(Box)<BoxProps>(() => ({
  maxWidth: 516,
}));

export const MainContent = styled(Box)<BoxProps>(() => ({}));
