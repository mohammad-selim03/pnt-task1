import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

// Initial state
const initialState = {
  cart: [],
  userInfo: null,
  favorite: [],
};

// Create the slice
const shofySlice = createSlice({
  name: "shofy",
  initialState,
  reducers: {
    addToFavorite: (state: any, action) => {
      state.favorite.push({ ...action.payload });
    },
    addToCart: (state: any, action) => {
      const existingProduct = state?.cart?.find(
        (item: any) => item?.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity! += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state: any, action) => {
      state.cart = state.cart.filter(
        (item: any) => item?.id !== action.payload
      );
    },
    increaseQuantity: (state: any, action) => {
      const existingProduct = state.cart.find(
        (item: any) => item?.id === action.payload
      );
      if (existingProduct) {
        existingProduct.quantity! += 1;
      }
    },
    decreaseQuantity: (state: any, action) => {
      const existingProduct = state.cart.find(
        (item: any) => item?.id === action.payload
      );
      if (existingProduct) {
        existingProduct.quantity! -= 1;
      }
    },
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const {
  addToFavorite,
  addToCart,
  addUser,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} = shofySlice.actions;
export default shofySlice.reducer;
