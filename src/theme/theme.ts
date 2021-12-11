import { createTheme } from '@mui/material';

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
