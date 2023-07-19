import { GET_OEM_SPECS, GET_PRODUCT, PRODUCT_FETCHING_FAILED, PRODUCT_LOADING, SORT_PRODUCT, UPDATE_PRODUCT } from "../actionTypes";

const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    OEMData: [],
    forUpdate: {}
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_PRODUCT:
            return { ...state, data: payload, isLoading: false };

        case PRODUCT_LOADING:
            return { ...state, isLoading: true };

        case PRODUCT_FETCHING_FAILED:
            return { ...state, isLoading: false, isError: true };
        case GET_OEM_SPECS:
            return { ...state, isLoading: false, OEMData: payload }
        case UPDATE_PRODUCT:
            return { ...state, isLoading: false, forUpdate: payload }
        case SORT_PRODUCT:
            return { ...state, isLoading: false, data: payload }
        default:
            return state
    }
}