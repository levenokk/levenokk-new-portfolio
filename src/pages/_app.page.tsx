import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';

import { IntlProvider } from '../context';
import { theme } from '../theme/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IntlProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </IntlProvider>
  );
}
export default MyApp;
