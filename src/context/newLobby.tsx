/* eslint-disable no-unused-vars */
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

type NewLobbyContextType = {
  players: number;
  setPlayers: Dispatch<SetStateAction<number>>;
  rounds: number;
  setRounds: Dispatch<SetStateAction<number>>;
  selectedTheme: string;
  setSelectedTheme: Dispatch<SetStateAction<string>>;
  owner: string | undefined;
  setOwner: Dispatch<SetStateAction<string>>;
};

const NewLobbyContext = createContext<NewLobbyContextType | undefined>(
  undefined,
);

export type NewLobbyProviderProps = {
  children?: ReactNode | string;
};

export const NewLobbyProvider = ({ children }: NewLobbyProviderProps) => {
  const [owner, setOwner] = useState('');
  const [players, setPlayers] = useState(1);
  const [rounds, setRounds] = useState(1);
  const [selectedTheme, setSelectedTheme] = useState('');
  return (
    <NewLobbyContext.Provider
      value={{
        players,
        setPlayers,
        rounds,
        setRounds,
        selectedTheme,
        setSelectedTheme,
        owner,
        setOwner,
      }}
    >
      {children}
    </NewLobbyContext.Provider>
  );
};

export const useNewLobby = () => {
  const context = useContext(NewLobbyContext);
  if (!context) {
    throw new Error('useEditModal must be used within an EditModalProvider');
  }
  return context;
};
