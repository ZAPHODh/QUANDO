import { LobbyForm } from '@/Components/LobbyForm';
import { useNewLobby } from '@/context/newLobby';
import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
type NewLobbyProps = {
  username: string;
};
export default function NewLobby({ username }: NewLobbyProps) {
  const { setOwner } = useNewLobby();
  setOwner(username);
  return <LobbyForm />;
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      username: session.user?.name,
    },
  };
}
