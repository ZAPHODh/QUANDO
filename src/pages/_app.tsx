import { NewLobbyProvider } from '@/context/newLobby';
import { GlobalStyles } from '../styles/global-styles';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <NewLobbyProvider>
        <Component {...pageProps} />
        <GlobalStyles />
      </NewLobbyProvider>
    </SessionProvider>
  );
}
