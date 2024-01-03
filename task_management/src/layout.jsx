// Layout.js
import React, { useState } from 'react'
import { HiBars3 } from 'react-icons/hi2'

import './Layout.css'

const Layout = ({ children }) => {
  const [user, setUser] = useState('Admin')
  return (
    // <div className="text-center flex p-0 m-0 min-h-screen">
    //   <div class="mx-auto max-w-screen-xl"></div>

    //   <main>{children}</main>

    //   <footer>
    //     {/* Add footer content here if needed */}
    //     <p>&copy; 2023 Your App</p>
    //   </footer>
    // </div>
    <div className="text-center  p-0 m-0 min-h-screen ">
      <div className="max-w-screen-xl bg-black flex main_layout ">
        <header className=" bg-red-500 layout_header">
          <div className="bg-white text-black flex justify-center p-4 layout">
            <h1>Your App</h1>
          </div>
          <ul>
            <li className="layout_lists">
              <HiBars3 className="layout_icons" />
              <a href="/" className="p-1">
                Dashboard
              </a>
            </li>
            <li className="layout_lists">
              <HiBars3 className="layout_icons" />
              <a href="/" className="p-1">
                Projects
              </a>
            </li>
            <li className="layout_lists">
              <HiBars3 className="layout_icons" />
              <a href="/" className="p-1">
                Lists
              </a>
            </li>
            <li className="layout_lists">
              <HiBars3 className="layout_icons" />
              <a href="/" className="p-1">
                Report
              </a>
            </li>
            <li className="layout_lists">
              <HiBars3 className="layout_icons" />
              <a href="/" className="p-1">
                Users
              </a>
            </li>
          </ul>
        </header>

        <main className="layout_main">{children}</main>

        <footer className=" layout_footer flex justify-between text-start">
          <p className="text-sm font-medium">copyright &copy; 2023 Your App</p>
          <h3 className="text-sm font-medium">Logged in as: user</h3>
        </footer>
      </div>
    </div>
  )
}

export default Layout
