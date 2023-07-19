import axios from "axios"

const BASE_URL = "http://localhost:4500/inventory"

export const getAllCars = (dispatch) => {

    axios.get(`${BASE_URL}/`)
        .then((res) => {
            console.log(res,"action")
        }).catch((err) => {
            console.log(err.message)
        })
}