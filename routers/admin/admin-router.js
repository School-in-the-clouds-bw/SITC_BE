const router = require('express').Router();
const adminModel = require('./admin-model.js');

function logError(err) {
  console.log('Error: ', err)
}


// POST new task
router.post('/tasks', async (req, res) => {
  try {
    const addedTask = await adminModel.addTask(req.body)
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
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await adminModel.getAllTasks()
    res.status(200).json(tasks)
  } catch(err) {
    logError(err)
    res.status(500).json({
      message: 'Could not get tasks'
    })
  }
})


// UPDATE task by id
router.put('/tasks/:id', async (req, res) => {
  try {
    const updatedTask = await adminModel.updateTaskById(req.params.id, req.body)
    res.status(201).json(updatedTask)
  } catch(err) {
    logError(err)
    res.status(500).json({
      message: 'Could not update task'
    })
  }
})


// DELETE task by id
router.delete('/tasks/:id', async (req, res) => {
  try {
    const deletedTask = await adminModel.deleteTaskById(req.params.id)
    res.status(202).json({
      message: 'Task deleted successfully'
    })
  } catch(err) {
    logError(err)
    res.status(500).json({
      message: 'Could not delete task'
    })
  }
})

module.exports = router;