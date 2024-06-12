import React from "react"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Signin from "./pages/Signin"
import Home from "./pages/Home"   
import SignUp from "./pages/SignUp"
import About from "./pages/About"
function App() {


  return (
    <>
       <BrowserRouter>
         <Routes>
          <Route path ='/' element={<Home/>}></Route>
          <Route path ='/sign-in' element={<Signin/>}></Route>
          <Route path ='/sign-up' element={<SignUp/>}></Route>
          <Route path ='/about' element={<About/>}></Route>
         </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
