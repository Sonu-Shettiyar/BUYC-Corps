import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCars } from '../redux/productReducer/action';
import { Box, SimpleGrid } from '@chakra-ui/react';
import AddProduct from './AddProduct';
import ProductCard from './ProductCard';

const Dashboard = () => {
  const { data, OEMData } = useSelector((store) => store.carReducer);
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getAllCars);
  }, [])
  return (
    <Box display={"grid"} id='grid'>
      {/* <AddProduct /> */}

        
      {
        data?.map((el, ind) => {
          return <ProductCard key={ind} {...el} />
        })
        }
        
    </Box>

  )
}

export default Dashboard