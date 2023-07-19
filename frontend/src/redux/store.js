import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as authReducer } from "./authReducer/reducer";
import thunk from "redux-thunk";
import { reducer as carReducer } from "./productReducer/reducer";
const rootReducer = combineReducers({
    authReducer,
    carReducer
})
const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export default store;