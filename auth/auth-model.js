const db = require('../database/dbConfig.js');

function getAllUsers() {
  return db('users')
}

async function addUser(user) {
  const [id] = await db('users').insert(user, 'id');
  return db('users').where({ id }).first();
}

function findBy(filter) {
  return db('users').where(filter)
}

module.exports = {
  getAllUsers,
  addUser,
  findBy
}