const jwt = require('jsonwebtoken');

function authenticate() {
  return async (req, res, next) => {
    try {
      const token = req.headers.cookie // req.headers.token ... saw in TK or sum somewhere
      if (!token) {
        return res.status(401).json({
          message: 'Invalid credentials, you\'re probable not logged in...'
        })
      } else {
        next()
      }
    } catch(err) {
      console.log('Error: ', err)
    }

    // try {
    //   const token = req.header.token
    //   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    //     if (err) {
    //       return res.status(401).json({
    //         message: 'Invalid credentials'
    //       })
    //     } else {
    //       next();
    //     }
    //   })

    // } catch(err) {
    //   console.log('Error: ', err)
    // }
  }
}

module.exports = authenticate;