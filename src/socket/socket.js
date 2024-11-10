const http = require('http');
const express = require('express');
const { Server } = require('socket.io');

const { env } = require('../config');

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

const userSocketMap = {};

io.on('connection', (socket) => {
  const userId = socket.handshake.query.userId;

  if (userId && userId !== 'undefined') {
    userSocketMap[userId] = socket.id;
    console.log(`${userId} connected ${socket.id}`);
  }

  socket.on('disconnect', () => {
    console.log(`${userId} disconnected ${socket.id}`);

    if (userSocketMap[userId] === socket.id) {
      delete userSocketMap[userId];
    }
  });
  // Lắng nghe sự kiện "onTyping" từ client
  socket.on('onTyping', ({ senderId, receiverId }) => {
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit('onTyping', { senderId });
    }
  });

  // Lắng nghe sự kiện "disOnTyping" từ client
  socket.on('disOnTyping', ({ senderId, receiverId }) => {
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit('disOnTyping', { senderId });
    }
  });
});

module.exports = { app, io, server, getReceiverSocketId };
