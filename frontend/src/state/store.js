import { configureStore } from '@reduxjs/toolkit';
import tabIndexReducer from "./tabIndexSlice";
import priceRangeReducer from './priceRangeSlice';
export const store = configureStore({
  reducer: {
    tabIndex : tabIndexReducer,
    priceRange: priceRangeReducer,
  },
});
