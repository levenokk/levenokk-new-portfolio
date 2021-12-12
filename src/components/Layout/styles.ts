import { Container, ContainerProps } from '@mui/material';
import { styled } from '@mui/styles';

export const Wrapper = styled(Container)<ContainerProps>(() => ({
  position: 'relative',
}));
