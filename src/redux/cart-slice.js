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
      //check is game already in cart?
      const gameExist = thunkApi
        .getState()
        .cart.cart.find((el) => el.Game.steamAppid === steamAppId);
      if (gameExist) {
        return {};
      }

      // check is game free?
      const isFree = thunkApi
        .getState()
        .cart.cart.find((el) => el.Game.isFree === true);
      if (isFree) {
        return {};
      }

      const res = await cartApi.setCartApi(steamAppId);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },
);

export const deleteItem = createAsyncThunk(
  "cart/deleteCart",
  async (itemId) => {
    try {
      const res = await cartApi.deleteItemApi(itemId);
      if (+res.data === 1) {
        return +itemId;
      }
      return "Error";
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
    removeItem: (state, action) => {
      state.cart = state.cart.filter((el) => el.steam_appid !== action.payload);
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
      action.payload && state.cart.push(action.payload);
      return state;

      // if (action.payload) {
      //   return {
      //     ...state,
      //     cart: [...state.cart, action.payload]
      //   }
      // }
      // return state;
    });
    builder.addCase(deleteItem.fulfilled, (state, action) => {
      state.cart = state.cart.filter((el) => el.id !== action.payload);
    });
  },
});

export const { setItem, addItem, clearItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
