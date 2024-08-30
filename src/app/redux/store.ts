import { configureStore } from "@reduxjs/toolkit";
import shopyReducer from "./shofySlice"; // Adjust the path if necessary

// Configure the store
export const store = configureStore({
  reducer: {
    shofy: shopyReducer,
  },
});


