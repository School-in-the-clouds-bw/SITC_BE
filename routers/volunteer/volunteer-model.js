const db = require('../../database/dbConfig.js');

function getAllTasks() {
  return db('tasks')
}

module.exports = {
  getAllTasks
}