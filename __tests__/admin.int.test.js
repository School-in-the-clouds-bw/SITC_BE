const server = require('../server.js');
const supertest = require('supertest');
const db = require('../database/dbConfig.js');

// beforeAll(async () => {
//   // runs a function before any tests in file run
//   await db('users').truncate();
// });

// afterAll(async () => {
//   await db.destroy()
// })

// describe('admin router integration tests', () => {
  // it('/POST /api/auth/login', async () => {
  //   let userInfo = {
  //     username: 'TestMan',
  //     password: 'test'
  //   }
  //   const res = await supertest(server)
  //     .post('/api/auth/login')
  //     .send(userInfo)
  //   expect(res.statusCode).toBe(200)
  //   // expect(res.message).toBe('hey')
  // })

  // it('/POST /api/admin/tasks', async () => {
  //   let newTask = {
  //     description: 'newTask from test file'
  //   }
  //   const res = await supertest(server)
  //     .post('/api/admin/tasks')
  //     .send(newTask)
  //   expect(res.statusCode).toBe(200)
  // })
// })