import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  profile: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    // builder.addCase();
  },
});

export default userSlice.reducer;
