import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as gameApi from "../apis/game-api";

const initialState = {
  gameInfo: [],
};

export const fetchGameInfo = createAsyncThunk(
  "game/fetchGameInfo",
  async () => {
    try {
      const res = await gameApi.getGameInfoApi();
      //   console.log(res.data);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },
);

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchGameInfo.fulfilled, (state, action) => {
      state.gameInfo = action.payload;
    });
  },
});

export default gameSlice.reducer;
export const {} = gameSlice.actions;
