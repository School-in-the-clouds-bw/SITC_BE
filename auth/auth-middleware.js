const jwt = require('jsonwebtoken');

function authenticate() {
  return async (req, res, next) => {
    // try {
    //   const token = req.headers.cookie // req.headers.token ... saw in TK or sum somewhere
    //   if (!token) {
    //     return res.status(401).json({
    //       message: 'Invalid credentials, you\'re probable not logged in...'
    //     })
    //   } else {
    //     next()
    //   }
    // } catch(err) {
    //   console.log('Error: ', err)
    // }

    try {
      const token = req.cookies.token
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          return res.status(401).json({
            message: 'Invalid credentials'
          })
        } else {
          // res.status(200).json(decoded)
          next();
        }
      })

    } catch(err) {
      console.log('Error: ', err)
      res.status(500).json({
        message: 'Please make sure you are logged'
      })
    }
  }
}

module.exports = authenticate;