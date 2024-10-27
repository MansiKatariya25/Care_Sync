import React from 'react'
import SideBar from './SideBar'
import RightComp from './RightComp'



function Dashboard() {
  return (
    <div className='flex w-[100vw] h-[100vh] overflow-x-hidden'>
      <SideBar/>
      <RightComp/>
    </div>
  )
}

export default Dashboard
