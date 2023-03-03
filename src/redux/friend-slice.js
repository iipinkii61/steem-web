import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as friendApi from "../apis/friend-api";
import * as userApi from "../apis/user-api";

const initialState = {
  allUser: [],
};

export const fetchAllUser = createAsyncThunk(
  "allUser/fetchAllUser",
  async () => {
    try {
      const res = await userApi.getAllUser();
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },
);

// export const sendRequest = createAsyncThunk(
//   "friend/sendRequest",
//   async (userId) => {
//     try {
//       const res = await friendApi.requestFriend(userId);
//       return res.data;
//     } catch (err) {
//       console.error(err);
//     }
//   },
// );

export const friendSlice = createSlice({
  name: "friend",
  initialState,
  extraReducers(builder) {
    // builder.addCase(sendRequest.fulfilled, (state, action) => {
    //   state.friend.push(action.payload);
    // });
    builder.addCase(fetchAllUser.fulfilled, (state, action) => {
      state.allUser = action.payload;
    });
  },
});

export default friendSlice.reducer;
