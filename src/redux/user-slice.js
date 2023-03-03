import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as profileApi from "../apis/user-api";

const initialState = {
  // profile: {
  //   name: "",
  //   image: "",
  //   coverImage: "",
  //   role: "",
  // },
  profile: {},
  loading: false,
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

export const fetchAllUser = createAsyncThunk("user/fetchAllUser", async () => {
  try {
    const res = await profileApi.getAllUser();
    return res.data;
  } catch (err) {
    console.error(err);
  }
});
export const editUserProfile = createAsyncThunk(
  "user/editUserProfile",
  async ({ userId, formData }) => {
    try {
      const res = await profileApi.editProfileApi(userId, formData);
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
    builder.addCase(fetchAllUser.fulfilled, (state, action) => {
      state.profile = action.payload;
    });
    builder
      .addCase(editUserProfile.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(editUserProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
        state.loading = initialState.loading;
      });
  },
});

export default userSlice.reducer;
