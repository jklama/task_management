// import React, { useState } from 'react'
// import axios from 'axios'

// const Login = () => {
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/login', {
//         username,
//         password,
//       })
//       console.log(response.data)
//     } catch (error) {
//       console.error(error.response.data)
//     }
//   }

//   return (
//     <div>
//       <h2>Login</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   )
// }

// export default Login

// Login.js

import React, { useState } from 'react'
import axios from 'axios'

const Login = ({ setUserRole }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
      })
      console.log(response.data)

      // Assuming the backend sends the user's role in the response
      setUserRole(response.data.user.isAdmin ? 'admin' : 'user')
    } catch (error) {
      console.error(error.response.data)
    }
  }

  return (
    <div>
      <h2>Login</h2>
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
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
