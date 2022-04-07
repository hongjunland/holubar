import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
    },
    reducers: {
        setToken: (state, userToken)=>{
            state.token = userToken.payload;
        }
    }
})

export const {setToken} = authSlice;
export default authSlice.reducer;