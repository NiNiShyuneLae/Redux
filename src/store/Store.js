import { combineReducers, createStore } from "redux";
import AppReducer from "./reducer/AppReducer";

const combine = combineReducers({
    counter : AppReducer
})

const store = createStore(combine)

export default store