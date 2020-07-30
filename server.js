const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const authMiddleware = require('./auth/auth-middleware.js');
const authRouter = require('./auth/auth-router.js');
const adminRouter = require('./routers/admin/admin-router.js');
const studentRouter = require('./routers/student/student-router.js');
const volunteerRouter = require('./routers/volunteer/volunteer-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(cookieParser());

server.use('/api/auth', authRouter);
server.use('/api/admin', adminRouter);
server.use('/api/student', studentRouter);
server.use('/api/volunteer', volunteerRouter);

server.get('/', (req, res) => {
  res.json({
    message: 'school in the cloud back end server running'
  })
})

module.exports = server;