import { useEffect, useState } from 'react';
import { MaxQuantity } from '../MaxQuantity';

import * as Styled from './styles';
import { Description } from '../Description';
import { Cards } from '../Cards';
import { useRouter } from 'next/navigation';
import { generateUniqueId } from '@/utils/generateUniqueId';
import { useNewLobby } from '@/context/newLobby';

export const LobbyForm = () => {
  const {
    players,
    setPlayers,
    rounds,
    selectedTheme,
    setRounds,
    setSelectedTheme,
  } = useNewLobby();
  const [abbleToSend, setAbbleToSend] = useState(false);
  const router = useRouter();
  // verify if the user selected the game mode
  useEffect(() => {
    if (selectedTheme === '') return;
    setAbbleToSend(true);
  }, [players, rounds, selectedTheme]);

  //increase and decrease operators
  const handleIncreatePlayers = () => {
    if (players === 6) return;
    setPlayers((player) => player + 1);
  };

  const handleDecreasePlayers = () => {
    if (players === 1) return;
    setPlayers((player) => player - 1);
  };

  const handleIncreaseRounds = () => {
    if (rounds === 10) return;
    setRounds((round) => round + 1);
  };

  const handleDecreaseRounds = () => {
    if (rounds === 1) return;
    setRounds((round) => round - 1);
  };

  const handleCardClick = (themeName: string) => {
    setSelectedTheme(themeName);
  };
  const handleCreateLobby = () => {
    if (!players || !rounds || !selectedTheme) return;
    const uniqueId = generateUniqueId();
    router.push(`/lobby/${uniqueId}`);
  };
  return (
    <Styled.Wrapper>
      <Description color="#f8ecc2" fontSize="20px" padding="10px">
        Número de jogadores
      </Description>
      <MaxQuantity
        quantity={players}
        leftClick={handleDecreasePlayers}
        rightClick={handleIncreatePlayers}
        what="Jogador(es)"
      ></MaxQuantity>
      <Description color="#f8ecc2" fontSize="20px" padding="10px">
        Quantidade de rodadas
      </Description>
      <MaxQuantity
        quantity={rounds}
        leftClick={handleDecreaseRounds}
        rightClick={handleIncreaseRounds}
        what="Rodada(s)"
      ></MaxQuantity>
      <Description color="#f8ecc2" fontSize="20px" padding="10px">
        Escolha o Tema
      </Description>
      <Cards
        selectedTheme={selectedTheme}
        handleCardClick={handleCardClick}
      ></Cards>
      <Styled.Button disabled={!abbleToSend} onClick={handleCreateLobby}>
        Criar
      </Styled.Button>
    </Styled.Wrapper>
  );
};
