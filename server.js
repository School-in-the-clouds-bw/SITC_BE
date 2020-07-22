const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const authMiddleware = require('./auth/auth-middleware.js')
const authRouter = require('./auth/auth-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authMiddleware(), authRouter)

server.get('/', (req, res) => {
  res.json({
    message: 'sitc server running'
  })
})

module.exports = server;