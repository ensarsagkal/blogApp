import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Dashboard from "../pages/Dashboard"
import NewBlog from "../pages/NewBlog"
import About from "../pages/About"

import Login from "../pages/Login"
import PrivateRouter from "./PrivateRouter"

const AppRouter = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="" element={<PrivateRouter/>}>
                  <Route path="/newBlog" element={<NewBlog/>}/>
            </Route>
            <Route path="/about" element={<About/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
        <Footer/>
    </Router>


  )
}

export default AppRouter