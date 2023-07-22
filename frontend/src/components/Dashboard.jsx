import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCars } from '../redux/productReducer/action';
import { Box, Center, Flex, Heading, SimpleGrid, Spinner } from '@chakra-ui/react';
import AddProduct from './AddProduct';
import ProductCard from './ProductCard';

const Dashboard = () => {
  const { data, OEMData, isLoading } = useSelector((store) => store.carReducer);
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getAllCars);
  }, [])
  return (isLoading ?<Center h={"60vh"} >
    <Flex justify={"center"} alignItems={"center"}>
    <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl' m={5}
/><Heading>
        Loading.....
      </Heading>
    </Flex>
  </Center> :
    <Box display={"grid"} id='grid'>
      {
        data?.map((el, ind) => {
          return <ProductCard key={ind} {...el} />
        })
      }

    </Box>

  )
}

export default Dashboard