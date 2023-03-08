import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as transactionApi from "../apis/transaction-api";

const initialState = {
  transaction: [],
  gameTrans: [],
  charge: {},
};

export const createTransaction = createAsyncThunk(
  "transaction/createTransaction",
  async ({ gameArrId, token }, thunkApi) => {
    try {
      const res = await transactionApi.createTransactionApi({
        gameArrId,
        token,
      });
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },
);

export const getTransaction = createAsyncThunk(
  "transaction/getTransaction",
  async () => {
    try {
      const res = await transactionApi.getTransactionApi();
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },
);

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setCharge: (state, action) => {
      state.charge = action.payload;
    },
    clearTransaction: (state, action) => {
      return initialState;
    },
  },
  extraReducers(builder) {
    builder.addCase(createTransaction.fulfilled, (state, action) => {
      state.transaction.push(action.payload);
    });
    builder.addCase(getTransaction.fulfilled, (state, action) => {
      state.gameTrans = action.payload;
    });
  },
});

export const { setCharge, clearTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
