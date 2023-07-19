import React from 'react'
import Navbar from "./Navbar"
import { Box } from '@chakra-ui/react'
import Dashboard from './Dashboard'
const Home = () => {
    return (
        <Box>
            <Navbar />
            <Dashboard />
        </Box>
    )
}

export default Home