// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import Layout from './layout'
// import Dashboard from './components/Dashboard'
// const UserList = () => {
//   const [users, setUsers] = useState([])
//   const [newUser, setNewUser] = useState({ username: '', email: '' })
//   const [selectedUser, setSelectedUser] = useState(null)

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('http://localhost:3001/api/users')
//         setUsers(response.data)
//       } catch (error) {
//         console.error('Error fetching users:', error)
//       }
//     }

//     fetchUsers()
//   }, [])

//   const handleInputChange = (e) => {
//     setNewUser({ ...newUser, [e.target.name]: e.target.value })
//   }

//   // Create User
//   const handleCreateUser = async (e) => {
//     e.preventDefault()

//     try {
//       const response = await axios.post(
//         'http://localhost:3001/api/users',
//         newUser
//       )
//       setUsers([...users, response.data])
//       setNewUser({ username: '', email: '' })
//     } catch (error) {
//       console.error('Error creating user:', error)
//     }
//   }

//   // Update User
//   const handleUpdateUser = async () => {
//     if (!selectedUser) return

//     try {
//       const response = await axios.put(
//         `http://localhost:3001/api/users/${selectedUser.id}`,
//         selectedUser
//       )
//       setUsers(
//         users.map((user) =>
//           user.id === selectedUser.id ? response.data : user
//         )
//       )
//       setSelectedUser(null)
//     } catch (error) {
//       console.error('Error updating user:', error)
//     }
//   }

//   // Delete User
//   const handleDeleteUser = async (userId) => {
//     try {
//       await axios.delete(`http://localhost:3001/api/users/${userId}`)
//       setUsers(users.filter((user) => user.id !== userId))
//       setSelectedUser(null)
//     } catch (error) {
//       console.error('Error deleting user:', error)
//     }
//   }

//   return (
//     <Layout>
//       <Dashboard />
//     </Layout>
//   )
// }

// export default UserList

// import React from 'react'
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
// import Register from './components/practise/register'
// import Login from './components/practise/login'
// import UserList from './components/practise/userList'

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/components/practise/register">Register</Link>
//             </li>
//             <li>
//               <Link to="/components/practise/login">Login</Link>
//             </li>
//             <li>
//               <Link to="/components/practise/userList">User List</Link>
//             </li>
//           </ul>
//         </nav>

//         <Switch>
//           <Route path="/components/practise/register" component={Register} />
//           <Route path="/components/practise/login" component={Login} />
//           <Route path="/components/practise/userList" component={UserList} />
//         </Switch>
//       </div>
//     </Router>
//   )
// }

// export default App

// App.js

import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Register from './components/practise/register'
import Login from './components/practise/login'
import UserList from './components/practise/userList'

const App = () => {
  const [userRole, setUserRole] = useState('user') // Assume a default role of 'user'

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Register />
          </li>
          <li>
            <Login />
          </li>
          {userRole === 'admin' && (
            <>
              <li>
                <a href="/components/practise/register">Register</a>'
              </li>
              <li>
                <a href="/components/practise/userList">User List</a>'
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  )
}

export default App
