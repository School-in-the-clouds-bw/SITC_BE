const db = require('../database/dbConfig.js');

function getAllUsers() {
  return db('users')
}

function addUser(user) {
  return db('users').insert(user)
}

function findBy(filter) {
  return db('users').where(filter)
}

module.exports = {
  getAllUsers,
  addUser,
  findBy
}