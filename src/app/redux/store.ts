import { configureStore } from "@reduxjs/toolkit";
import shopyReducer from "./shofySlice"; // Adjust the path if necessary

// Configure the store
export const store = configureStore({
  reducer: {
    shopy: shopyReducer,
  },
});

// Define types for the root state and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
