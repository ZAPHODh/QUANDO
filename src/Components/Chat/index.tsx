import { useSession } from 'next-auth/react';
import * as Styled from './styles';
import { v4 as uuid } from 'uuid';
import { Heading } from '../Heading';
import { Input } from '../Input';
import { FormEvent, useEffect, useState } from 'react';

import SendIcon from '@mui/icons-material/Send';
import { Socket, io } from 'socket.io-client';
export type Message = {
  author: string;
  msg: string;
};
let socket: Socket;
export const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState('');
  const { data: session } = useSession();

  const socketInitializer = async () => {
    await fetch('/api/socket');
    socket = io();
    console.log(socket);
    socket.on('messages', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  };

  useEffect(() => {
    socketInitializer();
  }, []);

  const sendMessage = (message: Message) => {
    if (!socket) return;
    socket.emit('sendMessage', message);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!message) return;

    const newMessage: Message = {
      author: session?.user?.name || 'Nome Padrão',
      msg: message,
    };

    sendMessage(newMessage);

    setMessage('');
  };

  return (
    <>
      <Styled.Wrapper>
        {messages.map((message) => {
          const isMe = message.author === session?.user?.name;
          const showHeading = !isMe;
          return (
            <Styled.Message key={uuid()} isMe={isMe}>
              {showHeading && <Heading as={'h5'}>{message.author}</Heading>}
              {message.msg}
            </Styled.Message>
          );
        })}
      </Styled.Wrapper>
      <Styled.Form onSubmit={handleSubmit}>
        <Input
          margin={'5px 0px 5px 5px'}
          height={'35px'}
          placeholder="Escreva sua mensagem"
          onChange={(e) => setMessage(e.target.value)}
          id="message"
          value={message}
        />
        <Styled.Button>
          <SendIcon fontSize="inherit" />
        </Styled.Button>
      </Styled.Form>
    </>
  );
};
