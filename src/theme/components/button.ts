import { Components } from '@mui/material';

export const button: Components = {
  MuiButton: {
    variants: [
      {
        props: {
          variant: 'outlined',
        },
        style: {
          fontWeight: 500,
          letterSpacing: '0.04em',
          paddingBottom: '16px',
          paddingTop: '16px',
          fontSize: 16,
          filter: 'drop-shadow(0px 7px 12px rgba(0, 106, 242, 0.38))',
          textTransform: 'initial',
          borderRadius: 10,
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
      },
      {
        props: {
          variant: 'contained',
        },
        style: {
          fontWeight: 500,
          letterSpacing: '0.04em',
          paddingBottom: '16px',
          paddingTop: '16px',
          fontSize: 16,
          filter: 'drop-shadow(0px 7px 12px rgba(0, 106, 242, 0.38))',
          textTransform: 'initial',
          borderRadius: 10,
        },
      },
      {
        props: {
          variant: 'text',
        },
        style: {
          fontWeight: 500,
          letterSpacing: '0.04em',
          paddingBottom: '16px',
          paddingTop: '16px',
          fontSize: 16,
          boxShadow: '0px 7px 19px rgba(0, 0, 0, 0.15)',
          textTransform: 'initial',
          borderRadius: 10,
        },
      },
    ],
  },
};
