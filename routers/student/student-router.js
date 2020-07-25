const router = require('express').Router();
const studentsModel = require('./student-model.js');

function logError(err) {
  console.log('Error: ', err)
}

router.get('/volunteers', async (req, res) => {
  try {
    const volunteers = await studentsModel.getAllVolunteers()
    res.status(200).json(volunteers)
  } catch(err) {
    logError(err)
    res.status(500).json({
      message: 'Could not get volunteers'
    })
  }
})

module.exports = router;