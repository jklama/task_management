import React from 'react'
import { HiBars3 } from 'react-icons/hi2'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Dashboard = () => {
  return (
    <>
      <div className="bg-slate-500 pl-3 main_body">
        <nav className="bg-red-500 h-auto flex justify-between">
          <div className="flex justify-between nav_items">
            <HiBars3 className="layout_icons" />
            <h2>Task Management</h2>
          </div>
          <div className="flex justify-between nav_items relative right-3">
            <HiBars3 className="layout_icons" />
            <h2>Task Management</h2>
          </div>
        </nav>
        <div className="bg-blue-500 flex justify-items-start items-end h-10">
          home
        </div>
        <div className="bg-green-500 flex justify-items-start items-end h-10">
          Welcome User
        </div>
        <div className="relative top-9 p-2 flex space-between bg-sky-500 table_title">
          <div className="">
            <div className=" table_head ">Projects</div>

            <table>
              <thead className="">
                <tr className="table_head">
                  <th>#</th>
                  <th>Projects</th>
                  <th>Progress</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="table_head">
                  <td>1</td>
                  <td>Project A</td>
                  <td>70%</td>
                  <td>In Progress</td>
                </tr>
                {/* Add more rows as needed */}
                <tr className="table_head  ">
                  <td>2</td>
                  <td>Project B</td>
                  <td>30%</td>
                  <td>Completed</td>
                </tr>
                {/* Add an empty row */}
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="">
            <div className="bg-white flex justify-between card">
              <div className="first_card    text-start ">
                <h1>1</h1>
                <p>Total Projects</p>
              </div>
              <div className="second_card p-3">
                <HiBars3 />
              </div>
            </div>
            <div className="bg-white flex justify-between card">
              <div className="first_card text-start ">
                <h1>1</h1>
                <p>Total Projects</p>
              </div>
              <div className="second_card p-3">
                <HiBars3 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
