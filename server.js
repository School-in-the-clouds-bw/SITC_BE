const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

server.get('/', (req, res) => {
  res.json({
    message: 'sitc server running'
  })
})

module.exports = server;