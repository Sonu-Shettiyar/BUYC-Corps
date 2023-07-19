import React from 'react'
import Signup from './Signup'
import Signin from './Signin'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Home from './Home'
import { Box } from '@chakra-ui/react'
import AddProduct from './AddProduct'

const Allroutes = () => {
  return (
    <Box id="routes">
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Signin />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/sellCar' element={<AddProduct />}></Route>
      </Routes>
    </Box>
  )
}

export default Allroutes