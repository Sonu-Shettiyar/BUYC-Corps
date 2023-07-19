import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { isAuth } = useSelector((store) => store.authReducer);
    const navigate = useNavigate();
    if (!isAuth) {
        return navigate("/login")
    } else {

        return children;
    }

}

export default PrivateRoute