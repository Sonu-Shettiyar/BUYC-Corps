import axios from "axios";
import { AUTH_FAILURE, AUTH_LOADING, AUTH_SIGNOUT, AUTH_SUCCESS } from "../actionTypes";
const BASE_URL = "https://buyatcars.onrender.com"

export const signupHandler = (payload) => (dispatch) => {
    dispatch({ type: AUTH_LOADING })
    return axios.post(`${BASE_URL}/users/register`, payload)
        .catch((err) => {
            alert(err.message)
            dispatch({ type: AUTH_FAILURE })
        })
}

export const loginHandler = (payload) => dispatch => {
    axios.post(`${BASE_URL}/users/login`, payload)
        .then((res) => {
            console.log(res.data)
            alert(res.data.msg)
            dispatch({ type: AUTH_SUCCESS, payload: res.data })
        })
        .catch((err) => {
            alert(err.message)
            dispatch({ type: AUTH_FAILURE })
        })
}

export const logoutHandler = (dispatch) => {
    dispatch({ type: AUTH_SIGNOUT })
}
