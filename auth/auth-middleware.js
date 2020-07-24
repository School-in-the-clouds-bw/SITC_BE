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

    // jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    //     if (err) {
    //       return res.status(401).json({
    //         message: 'Invalid credentials'
    //       })
    //     } else {
    //       next();
    //     }
    //   })
  }
}

module.exports = authenticate;