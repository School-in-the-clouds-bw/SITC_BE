const db = require('../database/dbConfig.js');

function addTask(task) {
  return db('tasks').insert(task)
}

function getAllTasks() {
  return db('tasks')
}

module.exports = {
  addTask,
  getAllTasks
}