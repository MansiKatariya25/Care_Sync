import Home from './Components/Landing Page/Home'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Login from './Components/Authentication/Login'
import Signup from './Components/Authentication/Signup'
import Dashboard from './Components/Dashboard/Dashboard'

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
