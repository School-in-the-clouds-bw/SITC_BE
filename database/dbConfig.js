const knex = require("knex")
const knexfile = require("../knexfile.js")

const dbEnv = 'development';

module.exports = knex(knexfile[dbEnv]);