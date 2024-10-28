import React from 'react'
import SideBar from './SideBar'
import RightComp from './RightComp'
import Navbar from '../Common/Navbar'



function Dashboard() {
  return (
    <div className='flex flex-col w-[100vw] h-[100vh] overflow-x-hidden'>
      <Navbar/>
      <div className='flex'>
      <SideBar/>
      <RightComp/>
      </div>
      
    </div>
  )
}

export default Dashboard
