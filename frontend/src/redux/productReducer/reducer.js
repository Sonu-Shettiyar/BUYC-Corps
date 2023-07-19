import {  GET_PRODUCT, PRODUCT_FETCHING_FAILED, PRODUCT_LOADING } from "../actionTypes";

const initialState = {
    data: [],
    isLoading: false,
    isError: false
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_PRODUCT:
            return { ...state, data: payload, isLoading: false };

        case PRODUCT_LOADING:
            return { ...state, isLoading: true };

        case PRODUCT_FETCHING_FAILED:
            return { ...state, isLoading: false, isError: true };

        default:
            return state
    }
}