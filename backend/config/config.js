// Example configuration in Node.js/Express

const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'task_management',
  password: 'iAMGAMER',
  port: 5432, // Default PostgreSQL port
})

module.exports = pool
