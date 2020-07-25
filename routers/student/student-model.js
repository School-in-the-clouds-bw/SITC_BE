const db = require('../../database/dbConfig.js');

function getAllVolunteers() {
  return db('users').where('role', 'volunteer')
}

module.exports = {
  getAllVolunteers
}