const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const pgp = require('pg-promise')()
const app = express()

const db = pgp({
  connectionString: 'postgres://postgres:Iamgamer009@localhost:5432/newProject',
})

app.use(cors())
app.use(bodyParser.json())

// Register a new user

app.post('/register', async (req, res) => {
  const { username, password, isAdmin } = req.body
  try {
    await db.none(
      'INSERT INTO users(username, password, isAdmin) VALUES($1, $2, $3)',
      [username, password, isAdmin]
    )
    res.json({ success: true, message: 'User registered successfully' })
  } catch (error) {
    res.json({ success: false, message: 'Registration failed' })
  }
})
// Login
app.post('/login', async (req, res) => {
  const { username, password, isAdmin } = req.body
  try {
    const user = await db.one(
      'SELECT * FROM users WHERE username = $1 AND password = $2',
      [username, password, isAdmin]
    )
    res.json({ success: true, message: 'Login successful', user })
  } catch (error) {
    res.json({ success: false, message: 'Invalid credentials' })
  }
})

// Delete user
app.delete('/delete/:id', async (req, res) => {
  const userId = req.params.id
  const { isAdmin } = req.body // Admin status should be checked from the authentication token or session
  try {
    if (isAdmin) {
      await db.none('DELETE FROM users WHERE id = $1', userId)
      res.json({ success: true, message: 'User deleted successfully' })
    } else {
      res.status(403).json({ success: false, message: 'Permission denied' })
    }
  } catch (error) {
    res.json({ success: false, message: 'Deletion failed' })
  }
})

//Get users
app.get('/users', async (req, res) => {
  try {
    const users = await db.any('SELECT id, username, isAdmin FROM users')
    res.json(users)
  } catch (error) {
    res.json({ success: false, message: 'Failed to fetch users' })
  }
})

const PORT = 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
