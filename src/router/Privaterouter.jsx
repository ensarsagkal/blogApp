import React from 'react'
import NewBlog from '../pages/NewBlog'
import Login from '../pages/Login'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {
    const user = false
  return (
    user? <Outlet/>:<Navigate to="/login"/>
    
  )
}

export default PrivateRouter