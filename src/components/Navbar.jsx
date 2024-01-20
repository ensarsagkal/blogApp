import React from 'react'
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <nav >
    <ul >
      <li >
        <Link to="/">
          Dasboard
        </Link>
      </li>
      <li>
        <Link to="/newBlog">
          New Blog
        </Link>
      </li>
      <li >
        <Link to="/about" >
          About
        </Link>
      </li>
    
    </ul>
  </nav>
  )
}

export default Navbar