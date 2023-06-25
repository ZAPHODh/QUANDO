import { Chat } from '@/Components/Chat';
import { SendLinkModal } from '@/Components/SendLinkModal';
import { useNewLobby } from '@/context/newLobby';
import { useSession } from 'next-auth/react';

// import { useEffect, useState } from 'react';
// import io from 'socket.io-client';
export type LobbyTemplateProps = {
  url: string;
};
// type Message = {
//   author: string;
//   message: string;
// };
export const LobbyTemplate = ({ url }: LobbyTemplateProps) => {
  const { data: session } = useSession();

  const { owner, players, rounds, selectedTheme } = useNewLobby();

  return (
    <>
      {session?.user?.name === owner && <SendLinkModal link={url} />}
      <div>
        <Chat></Chat>
      </div>
    </>
  );
};
