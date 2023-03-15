import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as gameApi from "../apis/game-api";

const initialState = {
  gameInfo: [],
  showGame: {},
  loading: false,
  searchGame: [],
};

export const searchGame = createAsyncThunk(
  "game/searchGame",
  async (searchName) => {
    try {
      const res = await gameApi.searchGameApi(searchName);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },
);

export const fetchGameInfo = createAsyncThunk(
  "game/fetchGameInfo",
  async () => {
    try {
      const res = await gameApi.getGameInfoApi();
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },
);

export const fetchGame = createAsyncThunk(
  "game/fetchGame",
  async (steamAppId) => {
    try {
      const res = await gameApi.getGameByAppId(steamAppId);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },
);

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    clearShowGame: (state, action) => {
      state.showGame = initialState.showGame;
    },
    clearSearchGame: (state, action) => {
      state.searchGame = initialState.searchGame;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchGameInfo.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchGameInfo.fulfilled, (state, action) => {
        state.gameInfo = action.payload;
        state.loading = false;
      });
    builder.addCase(fetchGame.fulfilled, (state, action) => {
      state.showGame = action.payload;
    });
    builder.addCase(searchGame.fulfilled, (state, action) => {
      state.searchGame = action.payload;
    });
  },
});

export default gameSlice.reducer;
export const { clearShowGame, clearSearchGame } = gameSlice.actions;
