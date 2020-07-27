const server = require('../server.js');
const supertest = require('supertest');
const db = require('../database/dbConfig.js');


beforeAll(async () => {
  // runs a function before any tests in file run
  await db('users').truncate();
});


describe('auth-router integration tests', () => {
  it('/GET /api/auth/users', async () => {
    const res = await supertest(server).get('/api/auth/users')
    expect(res.statusCode).toBe(200)
  })

  it('/POST /api/auth/register', async () => {
    let newUser = {
      name: 'Dr Web Test',
      username: 'TestMan',
      email: 'tester@test.test',
      password: 'test',
      role: 'administrator',
      country: 'test'
    }
    const res = await supertest(server)
      .post('/api/auth/register')
      .send(newUser)
    expect(res.statusCode).toBe(201)
  })

  it('/POST /api/auth/login', async () => {
    let userInfo = {
      username: 'TestMan',
      password: 'test'
    }
    const res = await supertest(server)
      .post('/api/auth/login')
      .send(userInfo)
    expect(res.statusCode).toBe(200)
  })

  // it('/POST /api/admin/tasks', async () => {
  //   let newTask = {
  //     description: 'newTask from test file'
  //   }
  //   const res = await supertest(server)
  //     .post('/api/admin/tasks')
  //     .send(newTask)
  //   expect(res.statusCode).toBe(200)
  // })
})