import { PaletteMode, PaletteOptions } from '@mui/material';

export const getDesignTokens = (mode: PaletteMode): PaletteOptions => ({
  mode,
  ...(mode === 'light'
    ? {
        text: {
          primary: '#2C2C2C',
        },
        primary: {
          main: '#006AF2',
        },
        grey: {
          '400': '#777777',
        },
      }
    : {
        text: {
          primary: '#ffffff',
        },
        primary: {
          main: '#006AF2',
        },
        grey: {
          '400': '#d0d0d0',
        },
      }),
});
