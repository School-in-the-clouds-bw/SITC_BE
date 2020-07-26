const supertest = require('supertest');
const server = require('../server.js');
const db = require('../database/dbConfig.js');

test('GET /', async () => {
  const res = await supertest(server).get('/')
  expect(res.statusCode).toBe(200)
})