import { useState } from 'react'
import Navbar from './Components/Navbar'
import Top from './Components/Top'
import Middle from './Components/Middle'
import Bottom from './Components/Bottom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Top/>
      <Middle/>
      <Bottom/>
    </div>
  )
}

export default App
