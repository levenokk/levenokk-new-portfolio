import { createTheme, useMediaQuery } from '@mui/material';
import { useMemo } from 'react';

import { breakpoints } from './breakpoints';
import { button } from './components/button';
import { palette } from './palette';
import { typography } from './typography';

export const theme = createTheme({
  palette,
  typography,
  components: {
    ...button,
  },
  breakpoints,
});

export type Theme = typeof theme;

// export const useTheme = () => {
//   const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
//
//   return useMemo(() => {
//     return createTheme({
//       palette: {
//         ...palette,
//         mode: prefersDarkMode ? 'dark' : 'light',
//       },
//       typography,
//       components: {
//         ...button,
//       },
//       breakpoints,
//     });
//   }, [prefersDarkMode]);
// };
