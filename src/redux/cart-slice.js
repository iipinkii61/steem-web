import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItem: (state, action) => {
      state.cart.push(action.payload);
    },
    addItem: (state, action) => {
      const item = state.cart.find(
        (el) => el.steam_appid === action.payload.steam_appid,
      );
      if (item) {
        return state;
      }
      state.cart.push(action.payload);
    },
    clearItem: (state, action) => {
      state.cart = initialState.cart;
    },
  },
  extraReducers(builder) {
    // builder.addCase()
  },
});

export const { setItem, addItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
