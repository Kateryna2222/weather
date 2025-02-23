import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = import.meta.env.VITE_APP_ID;

export const getCurrentWeather = createAsyncThunk(
    'currentWeather/getCurrentWeather',
    async (value, thunkAPI) => {
        try {
            let res;
            if(typeof value === 'object'){
                res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${value.lat}&lon=${value.lon}&appid=${apiKey}`);
            }
            else{
                res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}`);
            }
            return res.data;  
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message || 'Unknown error');
        }
    }
);


const currentWheatherSlice = createSlice({
    name: 'currentWheather',
    initialState: {
        currentWheather: {},
        isLoading: true,
        isError: false
    },
    reducers: {
        changeDay: (state, {payload}) => {
            state.currentWheather = {name: state.currentWheather.name, ...payload}
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCurrentWeather.fulfilled, (state, {payload})=>{
            state.currentWheather = payload;
            state.isLoading = false;
            state.isError = false;
        })
        builder.addCase(getCurrentWeather.rejected, (state)=>{
            state.isError = true
            state.isLoading = false;
        })
    }
})

export const {changeDay} = currentWheatherSlice.actions;
export default currentWheatherSlice.reducer;