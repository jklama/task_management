import React, { useState, useEffect } from 'react'
import axios from 'axios'

const UserList = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users')
        setUsers(response.data)
      } catch (error) {
        console.error(error.response.data)
      }
    }

    fetchUsers()
  }, [])

  const handleDelete = async (userId, isAdmin) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/delete/${userId}`,
        { data: { isAdmin } }
      )
      console.log(response.data)
    } catch (error) {
      console.error(error.response.data)
    }
  }
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username}{' '}
            {user.isAdmin && (
              <button onClick={() => handleDelete(user.id, user.isAdmin)}>
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
