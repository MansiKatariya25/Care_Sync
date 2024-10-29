import Home from './Components/Landing Page/Home'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Login from './Components/Authentication/Login'
import Signup from './Components/Authentication/Signup'
import Dashboard from './Components/Dashboard/Dashboard'
import Family from './Components/Family/Family'
import Add from './Components/Family/Add'
import Popup from './Components/Dashboard/Popup'

import Questions from './Components/Diagnose/Questions'

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/family"  element={<Family/>}/>
      <Route path="/add" element={<Add/>}/>
      <Route path="/popup" element={<Popup/>}/>
      <Route path="/diagnose" element={<Questions/>}/>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
