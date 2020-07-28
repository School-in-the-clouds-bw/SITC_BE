const router = require('express').Router();
const volunteerModel = require('./volunteer-model.js');

function logError(err) {
  console.log('Error: ', err)
}

// GET all tasks
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await volunteerModel.getAllTasks()
    res.status(200).json(tasks)
  } catch(err) {
    logError(err)
    res.status(500).json({
      message: 'Could not get all tasks'
    })
  }
})

module.exports = router;