import { configureStore } from '@reduxjs/toolkit';
import tabIndexReducer from "./tabIndexSlice";
export const store = configureStore({
  reducer: {
    tabIndex : tabIndexReducer,
  },
});
