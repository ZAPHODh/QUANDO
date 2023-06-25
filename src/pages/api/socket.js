import { Server } from 'socket.io';

const ioHandler = (req, res) => {
  if (res.socket.server.io) {
    return res.end();
  }
  const io = new Server(res.socket.server);
  res.socket.server.io = io;
  io.on('connection', (socket) => {
    socket.on('sendMessage', (message) => {
      console.log(message);
      socket.broadcast.emit('messages', message);
    });
  });
  res.end();
};

export default ioHandler;
