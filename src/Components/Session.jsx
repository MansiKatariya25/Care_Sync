import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

function Session() {
    const useNav = useNavigate()
    useEffect(()=>{
        const verify = async()=>{
          
              try {
                const response = await axios.get('/auth/verify')
              } catch(error) {
                console.log(error)
                useNav("/login")
              }
            }
            verify()
    })
    

  return (
    <div>
      
    </div>
  )
}

export default Session
