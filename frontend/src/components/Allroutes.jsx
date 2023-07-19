import React from 'react'
import Signup from './Signup'
import Signin from './Signin'
import { Route, Routes } from 'react-router-dom'

const Allroutes = () => {
  return (
      <Routes>
          
<Route path="/signup" element={<Signup/>}></Route>
<Route path="/login" element={<Signin/>}></Route>
</Routes>    )
}

export default Allroutes