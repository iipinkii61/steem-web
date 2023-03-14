import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as friendApi from "../apis/friend-api";

const initialState = { friend: [] };

export const getAllFriends = createAsyncThunk(
  "friend/getAllfFriends",
  async () => {
    try {
      const res = await friendApi.getAllFriends();
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },
);

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

export const deleteFriend = createAsyncThunk(
  "friend/deleteFriend",
  async (friendId) => {
    try {
      const res = await friendApi.deleteFriend(friendId);
      if (+res.data === 1) {
        return +friendId;
      }
      return "Error";
    } catch (err) {
      console.error(err);
    }
  },
);

export const acceptFriend = createAsyncThunk(
  "user/acceptFriend",
  async (selected) => {
    try {
      const res = await friendApi.acceptFriend(selected.requesterId);
      // console.log("from DB --->", res.data);
      const temp = { ...selected, status: "ACCEPTER" };
      // console.log("dummy in front -->", temp);
      return { data: res.data, idx: selected.idx };
    } catch (err) {
      console.error(err);
    }
  },
);

export const friendSlice = createSlice({
  name: "friend",
  initialState,
  extraReducers(builder) {
    builder.addCase(getAllFriends.fulfilled, (state, action) => {
      state.friend = action.payload;
    });
    builder.addCase(sendRequest.fulfilled, (state, action) => {
      state.friend.push(action.payload);
    });
    builder.addCase(deleteFriend.fulfilled, (state, action) => {
      state.friend = state.friend.filter(
        (el) =>
          el.accepterId !== +action.payload &&
          el.requesterId !== +action.payload,
      );
    });
    builder.addCase(acceptFriend.fulfilled, (state, action) => {
      state.friend[action.payload.idx] = action.payload.data;
    });
  },
});

export default friendSlice.reducer;
