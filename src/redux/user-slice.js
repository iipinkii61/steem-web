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
  async (userId) => {
    try {
      const res = await profileApi.getProfileApi(userId);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },
);

export const editUserProfile = createAsyncThunk(
  "user/editUserProfile",
  async ({ name, image, coverImage }) => {
    try {
      const formData = new FormData();
      if (name) {
        formData.append("name", name);
      }
      if (image) {
        formData.append("image", image);
      }
      if (coverImage) {
        formData.append("coverImage", coverImage);
      }
      const res = await profileApi.editProfileApi(formData);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUser: (state, action) => {
      // state.profile = initialState.profile;
      // state.loading = initialState.loading;
      return initialState;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.profile = action.payload;
    });
    builder
      .addCase(editUserProfile.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(editUserProfile.fulfilled, (state, action) => {
        // state.profile = action.payload;
        state.profile = { ...state.profile, ...action.payload };
        state.loading = initialState.loading;
      });
  },
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
