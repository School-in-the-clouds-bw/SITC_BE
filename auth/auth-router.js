const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authModel = require('./auth-model.js');

function logError(err) {
  console.log('Error: ', err)
}

router.get('/users', async (req, res) => {
  try {
    const users = await authModel.getAllUsers()
    res.status(200).json(users)
  } catch(err) {
    logError(err)
  }
})

router.post('/register', async (req, res) => {
  try {
    const { username, password, user_type } = req.body;

    const existingUser = await authModel.findBy({ username }).first()
    if (existingUser) {
      res.status(409).json({
        message: 'Username is taken'
      })
    }

    const newUser = await authModel.addUser({
      username,
      password: await bcrypt.hash(password, 14),
      user_type 
    })
    if (newUser) {
      res.status(201).json({
        message: 'User created successfully'
      })
    }
  } catch(err) {
    logError(err)
  }
})

module.exports = router;