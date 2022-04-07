import { configureStore } from '@reduxjs/toolkit';
import tabIndexReducer from "./tabIndexSlice";
import priceRangeReducer from './priceRangeSlice';
import userReducer from './userSlice';
import authSliceReducer from './authSlice';
import assetsReducer from './assetsSlice';
import filterReducer from './filterSlice'
export const store = configureStore({
  reducer: {
    tabIndex : tabIndexReducer,
    priceRange: priceRangeReducer,
    auth : authSliceReducer,
    user : userReducer,
    assets : assetsReducer,
    filter: filterReducer,
  },
});
