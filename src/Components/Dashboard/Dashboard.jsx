import React from 'react'
import SideBar from './SideBar'
import Main from './main'


function Dashboard() {
  return (
    <div className='flex'>
      <SideBar/>
      <Main/>
    </div>
  )
}

export default Dashboard
