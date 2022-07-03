import {createStore, combineReducers, applyMiddleware } from "redux";
import {animalReducer} from "./reducers/animalReducer/animalReducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
    animals: animalReducer,
})

export const store = createStore(reducer, applyMiddleware(thunk));