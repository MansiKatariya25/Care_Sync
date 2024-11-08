import Home from "./Components/Landing Page/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Authentication/Login";
import Signup from "./Components/Authentication/Signup";
import Dashboard from "./Components/Dashboard/Dashboard";
import Family from "./Components/Family/Family";
import Add from "./Components/Family/Add";
import Popup from "./Components/Dashboard/Popup";
import Questions from "./Components/Diagnose/Questions";
import axios from "axios";
import { createContext ,useEffect , useState} from "react";

export const DataProvider = createContext();
function App() {
  axios.defaults.baseURL = "http://localhost:8800";
  axios.defaults.headers.authorization = localStorage.getItem("token");

  const [Fam,setFam] = useState("")

  useEffect(()=>{
    const getfam = async () => {
      try {
        const response = await axios.get('/family/getfamdata');
        console.log(response.data);
        setFam(response.data);
        // setFilter(response.data)
      } catch(error) {
        console.log(error);
      }
    }
    getfam()
  },[])

  return (
    <DataProvider.Provider value={{Fam:Fam}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/family" element={<Family />} />
          <Route path="/add" element={<Add />} />
          <Route path="/popup" element={<Popup />} />
          <Route path="/diagnose" element={<Questions />} />
        </Routes>
      </BrowserRouter>
    </DataProvider.Provider>
  );
}

export default App;
