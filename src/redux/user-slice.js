import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as profileApi from "../apis/user-api";

const initialState = {
  profile: {},
  // profile: {
  //   name: "",
  //   image: "",
  //   coverImage: "",
  //   role: "",
  // },
};

export const fetchUserProfile = createAsyncThunk(
  "user/fetchProfile",
  async () => {
    try {
      const res = await profileApi.getProfileApi();
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.profile = action.payload;
    });
  },
});

export default userSlice.reducer;
