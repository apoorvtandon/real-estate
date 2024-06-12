import React from "react"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Signin from "./pages/Signin"
import Home from "./pages/Home"   
import SignUp from "./pages/SignUp"
import About from "./pages/About"
import Header from "./components/Header"
function App() {


  return (
    <>
       <BrowserRouter>
        <Header/> 
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
