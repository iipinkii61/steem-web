import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as cartApi from "../apis/cart-api";

const initialState = {
  cart: [],
};

export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  try {
    const res = await cartApi.getCartApi();
    return res.data;
  } catch (err) {
    console.error(err);
  }
});

export const setCart = createAsyncThunk(
  "cart/setCart",
  async (steamAppId, thunkApi) => {
    try {
      const gameExist = thunkApi
        .getState()
        .find((el) => el.steam_appid === steamAppId);
      if (gameExist) {
        return {};
      }
      const res = await cartApi.setCartApi(steamAppId);
      return res.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
);

export const deleteCart = createAsyncThunk(
  "cart/deleteCart",
  async (steamAppId) => {
    try {
      const res = await cartApi.deleteCartApi(steamAppId);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },
);

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
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
    builder.addCase(setCart.fulfilled, (state, action) => {
      state.cart.push(action.payload);
    });
  },
});

export const { setItem, addItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
