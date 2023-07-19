import React from 'react'
import Navbar from "./Navbar"
import { Box, Button } from '@chakra-ui/react'
import Dashboard from './Dashboard'
const Home = () => {
    return (
        <Box>
            <Navbar />
            <Box textAlign={"end"}>
                <Button border={"1px solid #c8d1d288"} borderBottom={"2px solid black"}>New Deal</Button>
            </Box>
            <Dashboard />
        </Box>
    )
}

export default Home