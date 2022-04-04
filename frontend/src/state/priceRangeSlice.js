import { createSlice } from "@reduxjs/toolkit";

export const priceRangeSlice = createSlice({
    name: 'priceRange',
    initialState: {
        currency: "USD",
        from: 0,
        to: 0,
    },
    reducers: {
        changeCurrency: (state, action) =>{
            state.currency = action.payload;
        },
        changeFrom: (state, action) =>{
            state.from = action.payload;
        },
        changeTo: (state, action) =>{
            state.to = action.payload;
        }
    }
});

export const {changeCurrency, changeFrom, changeTo} = priceRangeSlice.actions;

export default priceRangeSlice.reducer;