const router = require('express').Router();
const adminModel = require('./admin-model.js');

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

module.exports = router;