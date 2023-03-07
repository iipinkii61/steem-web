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
        .cart.cart.find((el) => el.Game.steamAppid === +steamAppId);
      if (gameExist) {
        return 0;
      }

      // check is game free?
      const isFree = thunkApi
        .getState()
        .cart.cart.find((el) => el.Game.isFree === true);
      if (isFree) {
        return 0;
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

export const removeAll = createAsyncThunk("cart/removeAll", async () => {
  try {
    const res = await cartApi.removeAllApi();
    return res.data;
  } catch (err) {
    console.error(err);
  }
});

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state, action) => {
      // state.cart = initialState.cart;
      return initialState;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
    builder.addCase(setCart.fulfilled, (state, action) => {
      if (action.payload) {
        state.cart.push(action.payload);
      } else {
        console.log("already in cart");
        return state;
      }

      // action.payload && state.cart.push(action.payload);
      // return state;

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
      // return state.cart.filter((el) => el.id !== action.payload);
    });
    builder.addCase(removeAll.fulfilled, (state, action) => {
      if (action.payload) {
        state.cart = initialState.cart;
      } else {
        return state;
      }
    });
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
