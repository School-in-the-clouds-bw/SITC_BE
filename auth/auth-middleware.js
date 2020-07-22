const jwt = require('jsonwebtoken');

function authenticate() {
  return async (req, res, next) => {
    try {
      const token = req.headers.cookie
      if (!token) {
        return res.status(401).json({
          message: 'Invalid credentials'
        })
      } else {
        next()
      }
    } catch(err) {
      console.log('Error: ', err)
    }
  }
}

module.exports = authenticate;