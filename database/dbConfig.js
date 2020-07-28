const knex = require("knex")
const knexfile = require("../knexfile.js")

const dbEnv = 'development';
// process.env.DB_ENV <-- from postgres config vars

module.exports = knex(knexfile[dbEnv]);