import type {AppProps} from 'next/app';
import {
  GlobalStyles,
  MantineProvider,
  SsrProvider,
  useStylesCleanup,
} from '@mantine/core';

function MyApp({Component, pageProps}: AppProps) {
  useStylesCleanup();

  return (
    <SsrProvider>
      <MantineProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </MantineProvider>
    </SsrProvider>
  );
}
export default MyApp;
