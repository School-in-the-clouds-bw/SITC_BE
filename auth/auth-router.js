const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authModel = require('./auth-model.js');
require("dotenv").config(); // for reading JWT_SECRET from .env file

function logError(err) {
  console.log('Error: ', err)
}

router.get('/users', async (req, res) => {
  try {
    const users = await authModel.getAllUsers()
    res.status(200).json(users)
  } catch(err) {
    logError(err)
    res.status(500).json({
      message: 'Could not get all users'
    })
  }
})


// EDIT user by id
router.put('/users/:id', async (req, res) => {
  try {
    const changes = req.body;
    const updatedUser = await authModel.updateUser(req.params.id, changes)
    res.status(201).json({
      message: 'Updated profile'
    })
  } catch(err) {
    logError(err)
    res.status(500).json({
      message: 'Server error, Could not update profile'
    })
  }
})


// REGISTER
router.post('/register', async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const existingEmail = await authModel.findBy({ email }).first()
    if (existingEmail) {
      res.status(409).json({
        message: 'Email already in use'
      })
    }

    const existingUser = await authModel.findBy({ username }).first()
    if (existingUser) {
      res.status(409).json({
        message: 'Username is taken'
      })
    }

    const newUser = await authModel.addUser({
      ...req.body,
      password: await bcrypt.hash(password, 14),
    })
    if (newUser) {
      res.status(201).json({
        message: 'User created successfully'
      })
    }
  } catch(err) {
    logError(err),
    res.status(500).json({
      errorMessage: 'Could not create user, verify credentials, check connection'
    })
  }
})


// LOGIN
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await authModel.findBy({ username }).first()
    if (!user) {
      res.status(401).json({
        message: 'Invalid credentials'
      })
    }

    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) {
      res.status(401).json({
        message: 'Invalid credentials'
      })
    }

    const token = generateToken(user)
    res.cookie('token', token)
    res.json({
      message: `Hello ${username}`,
      id: user.id,
      role: user.role,
      token: token 
    })


  } catch(err) {
    logError(err)
    res.status(500).json({
      message: 'Could not login'
    })
  }
})

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    role: user.role
  }

  return jwt.sign(payload, process.env.JWT_SECRET)
}

module.exports = router;