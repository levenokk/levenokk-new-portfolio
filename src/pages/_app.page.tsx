import { ApolloProvider } from '@apollo/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';

import { IntlProvider } from '../context';
import { client } from '../graphql/client';
import { useTheme } from '../theme/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const theme = useTheme();

  return (
    <ApolloProvider client={client}>
      <IntlProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </IntlProvider>
    </ApolloProvider>
  );
}
export default MyApp;
