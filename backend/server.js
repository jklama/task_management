const pool = require('./config/config')
const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')
app.use(cors())
app.use(express.json())

app.get('/api/users', async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM users')
  res.json(rows)
})

app.post('/api/users', async (req, res) => {
  const { username, email } = req.body
  if (!username || !email) {
    return res.status(400).json({ error: 'Username and email are required' })
  }

  try {
    const result = await pool.query(
      'INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *',
      [username, email]
    )
    res.status(201).json(result.rows[0])
  } catch (error) {
    console.error('Error creating user:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})
// Update a user by ID
app.put('/api/users/:id', async (req, res) => {
  const userId = req.params.id
  const { username, email } = req.body

  try {
    const result = await pool.query(
      'UPDATE users SET username = $1, email = $2 WHERE id = $3 RETURNING *',
      [username, email, userId]
    )
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' })
    }

    res.json(result.rows[0])
  } catch (error) {
    console.error('Error updating user:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

app.delete('/api/users/:id', async (req, res) => {
  const userId = req.params.id

  try {
    const result = await pool.query(
      'DELETE FROM users WHERE id = $1 RETURNING *',
      [userId]
    )
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' })
    }

    res.json({ message: 'User deleted successfully' })
  } catch (error) {
    console.error('Error deleting user:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
