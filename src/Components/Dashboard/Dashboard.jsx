import React, { useEffect } from 'react'
import SideBar from './SideBar'
import RightComp from './RightComp'
import Session from '../session'
import Navbar from '../Common/Navbar'

function Dashboard() {

  return (
    <div className='flex flex-col w-[100vw] h-[100vh] overflow-x-hidden'>
      <Session/>
      <Navbar/>
      <div className='flex'>
      <SideBar/>
      <RightComp/>
      </div>
      
    </div>
  )
}

export default Dashboard
