import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UserList = () => {
  const [users, setUsers] = useState([])
  const [newUser, setNewUser] = useState({ username: '', email: '' })
  const [selectedUser, setSelectedUser] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/users')
        setUsers(response.data)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }

    fetchUsers()
  }, [])

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value })
  }

  // Create User
  const handleCreateUser = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        'http://localhost:3001/api/users',
        newUser
      )
      setUsers([...users, response.data])
      setNewUser({ username: '', email: '' })
    } catch (error) {
      console.error('Error creating user:', error)
    }
  }

  // Update User
  const handleUpdateUser = async () => {
    if (!selectedUser) return

    try {
      const response = await axios.put(
        `http://localhost:3001/api/users/${selectedUser.id}`,
        selectedUser
      )
      setUsers(
        users.map((user) =>
          user.id === selectedUser.id ? response.data : user
        )
      )
      setSelectedUser(null)
    } catch (error) {
      console.error('Error updating user:', error)
    }
  }

  // Delete User
  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:3001/api/users/${userId}`)
      setUsers(users.filter((user) => user.id !== userId))
      setSelectedUser(null)
    } catch (error) {
      console.error('Error deleting user:', error)
    }
  }

  return (
    <div>
      <h1 className="text-5xl">User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} - {user.email}
            <button onClick={() => setSelectedUser(user)}>Update</button>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {selectedUser && (
        <div>
          <h2>Edit User</h2>
          <form>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={selectedUser.username}
                onChange={(e) =>
                  setSelectedUser({ ...selectedUser, username: e.target.value })
                }
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={selectedUser.email}
                onChange={(e) =>
                  setSelectedUser({ ...selectedUser, email: e.target.value })
                }
                required
              />
            </label>
            <button type="button" onClick={handleUpdateUser}>
              Save Changes
            </button>
            <button type="button" onClick={() => setSelectedUser(null)}>
              Cancel
            </button>
          </form>
        </div>
      )}

      <h2>Create User</h2>
      <form onSubmit={handleCreateUser}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={newUser.username}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={newUser.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Create User</button>
      </form>
    </div>
  )
}

export default UserList
