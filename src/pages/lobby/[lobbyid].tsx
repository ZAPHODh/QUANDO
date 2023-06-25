import { LobbyTemplate } from '@/Templates/Lobby';

import Head from 'next/head';
import { usePathname } from 'next/navigation';
export default function Lobby() {
  const pathName = usePathname();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  return (
    <>
      <Head>
        <title>Partida</title>
      </Head>
      <LobbyTemplate url={baseUrl + pathName}></LobbyTemplate>
    </>
  );
}
