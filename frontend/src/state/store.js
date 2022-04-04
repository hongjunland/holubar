import { configureStore } from '@reduxjs/toolkit';
import tabIndexReducer from "./tabIndexSlice";
import priceRangeReducer from './priceRangeSlice';
import userReducer from './userSlice';
export const store = configureStore({
  reducer: {
    tabIndex : tabIndexReducer,
    priceRange: priceRangeReducer,
    user: userReducer,
  },
});
