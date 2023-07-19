import React from 'react'
import Signup from './Signup'
import Signin from './Signin'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Home from './Home'

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Signin />}></Route>
      <Route path='/' element={<Home />}></Route>
      <Route path='/dashboard' element={<Dashboard />}></Route>
    </Routes>)
}

export default Allroutes