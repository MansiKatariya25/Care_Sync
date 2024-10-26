import React from 'react'
import SideBar from './SideBar'
import RightComp from './RightComp'



function Dashboard() {
  return (
    <div className='flex'>
      <SideBar/>
      <RightComp/>
    </div>
  )
}

export default Dashboard
