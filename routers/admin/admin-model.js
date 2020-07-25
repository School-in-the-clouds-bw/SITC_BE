const db = require('../../database/dbConfig.js');

// POST new task
function addTask(task) {
  return db('tasks').insert(task)
}

// GET all tasks
function getAllTasks() {
  return db('tasks')
}

// UPDATE task by id
function updateTaskById(id, changes) {
  return db('tasks').where({ id }).update(changes)
}

module.exports = {
  addTask,
  getAllTasks,
  updateTaskById
}