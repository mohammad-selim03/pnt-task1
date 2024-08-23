import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of your state
interface User {
  name: string;
  image: string;
}

interface ShofyState {
  cart: any[]; // Specify a type for cart items if known
  userInfo: User | null;
}

// Initial state
const initialState: ShofyState = {
  cart: [],
  userInfo: null,
};

// Create the slice
const shofySlice = createSlice({
  name: "shofy",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any[]>) => { // Define a proper type for cart items
      state.cart = action.payload;
    },
    addUser: (state, action: PayloadAction<User>) => {
      state.userInfo = action.payload;
    },
    // Uncomment if you need this action
    // removeUser: (state) => {
    //   state.userInfo = null;
    // },
  },
});

// Export actions and reducer
export const { addToCart, addUser } = shofySlice.actions;
export default shofySlice.reducer;
