// Example configuration in Node.js/Express

const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'newProject',
  password: 'Iamgamer009',
  port: 5432, // Default PostgreSQL port
})

module.exports = pool
