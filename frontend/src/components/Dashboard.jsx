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
    <Box>
      {/* <AddProduct /> */}

      <SimpleGrid columns={2} minChildWidth='120px' spacing='10px'>
        
      {
        data?.map((el, ind) => {
          return <ProductCard key={ind} {...el} />
        })
        }
      </SimpleGrid>
        
    </Box>

  )
}

export default Dashboard