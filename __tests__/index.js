const server = require('../server.js');
const supertest = require('supertest');

test('/GET', async () => {
  await supertest(server).get('/')
})