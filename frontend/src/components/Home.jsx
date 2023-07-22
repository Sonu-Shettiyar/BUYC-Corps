import React, { useEffect, useState } from 'react'
import Navbar from "./Navbar"
import { Box, Button, Flex, Input } from '@chakra-ui/react'
import Dashboard from './Dashboard'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {  getAllCarsSearch, getAllCarsSorted } from '../redux/productReducer/action'
const Home = () => {

    const dispatch = useDispatch();
    const [search, setSearch] = useState("")
    const handleSorting = (value) => {
        dispatch(getAllCarsSorted(value))
    }

    const handleSearch = () => {
        dispatch(getAllCarsSearch(search))
    }
    return (
        <Box>
            <Navbar />
            <Flex justifyContent={"space-around"} mt={2}>
                <Flex alignItems={"center"} gap={2}>
                    <h1>Price</h1>
                    <Button
                        border={"1px solid #c8d1d288"} borderBottom={"2px solid black"}
                        onClick={() => handleSorting("desc")}
                    >
                        High to Low
                    </Button><Button
                        border={"1px solid #c8d1d288"} borderBottom={"2px solid black"}
                        onClick={() => handleSorting("asc")}

                    >
                        Low to High
                    </Button>
                </Flex>
                <Box>  <Input placeholder='Search By Model, Title or Year...' borderBottom={"3px solid black"} onChange={(e) => setSearch(e.target.value)} width={"500px"} /><Button borderBottom={"2px solid black"} onClick={handleSearch}>Search</Button></Box>
                <Button border={"1px solid #c8d1d288"} borderBottom={"2px solid black"}>
                    <Link to={"/sellCar"}>+Create New Deal</Link>

                </Button>
            </Flex>
            <Dashboard />
        </Box>
    )
}

export default Home