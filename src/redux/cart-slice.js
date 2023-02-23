import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

initialState = {
  cart: [],
  transaction: {},
};

// const

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = state.cart.find((el) => el.appId === action.payload.appId);
      if (item) {
        return state;
      }
      state.cart.push(action.payload);
    },
  },
  extraReducers(builder) {
    // builder.addCase()
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
