import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCars } from '../redux/productReducer/action';

const Dashboard = () => {
  const data = useSelector((store) => store.carReducer.data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCars);
  }, [])
  return (
    <div>Dashboard

      {
        data?.map((el) => console.log(el))

      }
    </div>

  )
}

export default Dashboard