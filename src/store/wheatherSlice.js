import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = import.meta.env.VITE_APP_ID;

export const getwheatherForMonth = createAsyncThunk(
    'wheather/getwheatherForMonth',
    async (cityId, thunkAPI) => {
        try{
            const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}`)
            return data
        }
        catch(error){
            return thunkAPI.rejectWithValue(error.message || 'Unknown error');
        }
    }
)

const wheatherSlice = createSlice({
    name: 'wheather',
    initialState: {
        wheatherForMonth: {},
        isLoading: true,
        isError: false
    },
    extraReducers: (builder)=>{
        builder.addCase(getwheatherForMonth.fulfilled, (state, {payload})=>{
            state.wheatherForMonth = payload;
            state.isLoading = false;
        })
        builder.addCase(getwheatherForMonth.rejected, (state)=>{
            state.isError = false;
            state.isLoading = false;
        })
    }
})
 
export default wheatherSlice.reducer;