import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as friendApi from "../apis/friend-api";

const initialState = {
  friend: [],
};

export const sendRequest = createAsyncThunk(
  "friend/sendRequest",
  async (userId) => {
    try {
      const res = await friendApi.requestFriend(userId);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },
);

export const friendSlice = createSlice({
  name: "friend",
  initialState,
  extraReducers(builder) {
    builder.addCase(sendRequest.fulfilled, (state, action) => {
      state.friend.push(action.payload);
    });
  },
});

export default friendSlice.reducer;
