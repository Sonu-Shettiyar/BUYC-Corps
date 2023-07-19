import { GET_OEM_SPECS, GET_PRODUCT, MAKE_EDIT_PERMISSION_FALSE, PRODUCT_FETCHING_FAILED, PRODUCT_LOADING, SORT_PRODUCT, UPDATE_PRODUCT } from "../actionTypes";

const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    OEMData: [],
    forUpdate: {},
    forEdit: false
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_PRODUCT:
            return { ...state, data: payload, isLoading: false };

        case PRODUCT_LOADING:
            return { ...state, isLoading: true, forEdit: false };

        case PRODUCT_FETCHING_FAILED:
            return { ...state, isLoading: false, isError: true };
        case GET_OEM_SPECS:
            return { ...state, isLoading: false, OEMData: payload }
        case UPDATE_PRODUCT:
            return { ...state, isLoading: false, forUpdate: payload, forEdit: true }
        case SORT_PRODUCT:
            return { ...state, isLoading: false, data: payload }
        case MAKE_EDIT_PERMISSION_FALSE:
            return { ...state, forEdit: false }
        default:
            return state
    }
}