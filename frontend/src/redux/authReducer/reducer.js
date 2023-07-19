import { AUTH_FAILURE, AUTH_LOADING, AUTH_SIGNOUT, AUTH_SUCCESS } from "../actionTypes";

const initialState = {
    isAuth: false,
    isLoading: false,
    isError: false,
    user: {
        firstName: "",
        lastName: "",
        email: "",
        _id:""
    },
    token: "",
    refreshToken: ""

}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case AUTH_FAILURE:
            return { ...state, isAuth: false, isLoading: false, isError: true }
        case AUTH_LOADING:
            return { ...state, isLoading: true };
        case AUTH_SUCCESS:
            return { ...state, isLoading: false, isAuth: true, token: payload.token, user: payload.data, refreshToken: payload?.refreshToken }
        case AUTH_SIGNOUT:
            return { ...state, isAuth: false, user: initialState.user, isLoading: false }
        default:
            return state
    }
}

export { reducer };