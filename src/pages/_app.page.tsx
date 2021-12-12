import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';

import { IntlProvider } from '../context';
import { useTheme } from '../theme/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const theme = useTheme();

  return (
    <IntlProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </IntlProvider>
  );
}
export default MyApp;
