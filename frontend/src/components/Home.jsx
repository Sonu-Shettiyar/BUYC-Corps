import React, { useEffect, useState } from 'react'
import Navbar from "./Navbar"
import { Box, Button, Flex } from '@chakra-ui/react'
import Dashboard from './Dashboard'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { GET_PRODUCT } from '../redux/actionTypes'
import { getAllCars, getAllCarsSorted } from '../redux/productReducer/action'
const Home = () => {

    const dispatch = useDispatch();
    const [sortedArr,setSortedArr] = useState("")
    const handleSorting = (value) => {
       dispatch(getAllCarsSorted(value))
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
                <Button border={"1px solid #c8d1d288"} borderBottom={"2px solid black"}>
                    <Link to={"/sellCar"}>+Create New Deal</Link>

                </Button>
            </Flex>
            <Dashboard />
        </Box>
    )
}

export default Home