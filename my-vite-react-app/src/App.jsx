import {Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import NotFound from "./pages/NotFound"

import { useState } from 'react'
function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);

  return (
   <div className="bg-black w-full h-[100vh] text-white">
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
    <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="*" element={<NotFound/>}/>
   </Routes>
   </div>
    
  )
}

export default App
