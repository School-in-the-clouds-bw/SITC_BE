const db = require('../database/dbConfig.js');

function getAllUsers() {
  return db('users')
}

function getUserById(id) {
  return db('users').where({ id }).first()
}

function updateUser(id, changes) {
  return db('users').where({ id }).update(changes)
}

function addUser(user) {
  return db('users').insert(user)
}

function findBy(filter) {
  return db('users').where(filter)
}

module.exports = {
  getAllUsers,
  getUserById,
  updateUser,
  addUser,
  findBy
}