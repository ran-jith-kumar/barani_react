import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    list: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.list.push(action.payload); // Correctly pushing new item to the array
    },
    // Add other reducers if needed
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer; // Correct export
