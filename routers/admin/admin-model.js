const db = require('../../database/dbConfig.js');

function addTask(task) {
  return db('tasks').insert(task)
}

module.exports = {
  addTask
}