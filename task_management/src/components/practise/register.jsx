import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)
  const [error, setError] = useState('')

  const handleRegister = async () => {
    try {
      console.log('Sending request with:', { username, password, isAdmin })

      const response = await axios.post('http://localhost:5000/register', {
        username,
        password,
        isAdmin,
      })

      if (response.data.success) {
        console.log('Registration successful')
      } else {
        console.error('Registration failed:', response.data.message)
        setError(
          response.data.message || 'Registration failed. Please try again.'
        )
      }
    } catch (error) {
      console.error('Registration failed. Please try again.', error)
      setError('Registration failed. Please try again.')
    }
  }

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label>
        Admin
        <input
          type="checkbox"
          checked={isAdmin}
          onChange={(e) => setIsAdmin(e.target.checked)}
        />
      </label>
      <button onClick={handleRegister}>Register</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default Register
