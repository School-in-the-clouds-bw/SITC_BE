const router = require('express').Router();
const tasksModel = require('./tasks-model.js');

function logError(err) {
  console.log('Error: ', err)
}

// POST new task
router.post('/', async (req, res) => {
  try {
    const addedTask = await tasksModel.addTask(req.body)
    if (!addedTask) {
      res.status(409).json({
        message: 'Could not add task'
      })
    }
    res.status(201).json({
      message: 'Task created successfully'
    })
  } catch(err) {
    logError(err)
    res.status(500).json({
      message: 'Could not add task'
    })
  }
})

// GET all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await tasksModel.getAllTasks()
    res.status(200).json(tasks)
  } catch(err) {
    logError(err)
    res.status(500).json({
      message: 'Could not get all tasks'
    })
  }
})

module.exports = router;