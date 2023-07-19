import axios from "axios"
import { GET_OEM_SPECS, GET_PRODUCT, PRODUCT_FETCHING_FAILED } from "../actionTypes"

const BASE_URL = "http://localhost:4500/inventory"

export const getAllCars = (dispatch) => {

    axios.get(`${BASE_URL}`)
        .then((res) => {
            dispatch({ type: GET_PRODUCT, payload: res.data })
        }).catch((err) => {
            dispatch({ type: PRODUCT_FETCHING_FAILED })
        })
}
export const getSingleCar = (id) => (dispatch) => {

    axios.get(`${BASE_URL}/${id}`)
        .then((res) => {
            dispatch({ type: GET_PRODUCT, payload: res.data })
        }).catch((err) => {
            dispatch({ type: PRODUCT_FETCHING_FAILED })
        })
}

export const addProducts = (data) => (dispatch) => {

    axios.post(`${BASE_URL}`, data)
        .then((res) => {
            alert(res.data.msg)
            if (res.data.msg == "Added succesfully") {
                dispatch(getAllCars)
            }
        })
        .catch((err) => dispatch({ type: PRODUCT_FETCHING_FAILED }))
}

export const deleteProduct = (id) => (dispatch) => {

    axios.delete(`${BASE_URL}/${id}`)
        .then((res) => {
            alert(res.data.msg)
            if (res.data.msg === "Deleted successfully") {
                dispatch(getAllCars)
            }
        }).catch((err) => dispatch({ type: PRODUCT_FETCHING_FAILED }))
}

export const updateProduct = (id) => (dispatch) => {

    axios.patch(`${BASE_URL}/${id}`)
        .then((res) => {
            alert(res.data.msg)
            if (res.data.msg == "Updated successfully") {
                dispatch(getAllCars)
            }

        }).catch((err) => dispatch({ type: PRODUCT_FETCHING_FAILED }))
}
export const getOEMSpecsData = (dispatch) => {
    axios.get(`http://localhost:4500/oem_specs`)
        .then((res) => {
            dispatch({ type: GET_OEM_SPECS, payload: res.data.data })
        }).catch((err) => dispatch({ type: PRODUCT_FETCHING_FAILED }))
}