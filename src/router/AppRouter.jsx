import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Dashboard from "../pages/Dashboard"
import NewBlog from "../pages/NewBlog"
import About from "../pages/About"

const AppRouter = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="newBlog" element={<NewBlog/>}/>
            <Route path="about" element={<About/>}/>
        </Routes>
        <Footer/>
    </Router>


  )
}

export default AppRouter