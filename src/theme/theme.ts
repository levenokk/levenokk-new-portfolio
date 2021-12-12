import { createTheme, useMediaQuery } from '@mui/material';
import { useMemo } from 'react';

import { breakpoints } from './breakpoints';
import { button } from './components/button';
import { getDesignTokens } from './palette';
import { typography } from './typography';

export const useTheme = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return useMemo(
    () =>
      createTheme({
        palette: {
          ...getDesignTokens(prefersDarkMode ? 'dark' : 'light'),
        },
        typography,
        components: {
          ...button,
        },
        breakpoints,
      }),
    [prefersDarkMode],
  );
};
