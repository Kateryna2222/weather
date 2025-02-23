import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentWheatherSlice from './currentWheatherSlice';
import wheatherSlice from './wheatherSlice'

const rootReducer = combineReducers({
    currentWheather: currentWheatherSlice,
    wheather: wheatherSlice
})

const store = configureStore({
    reducer: rootReducer
})

export default store;