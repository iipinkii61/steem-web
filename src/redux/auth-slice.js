import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../utils/local-storage";
import * as authApi from "../apis/auth-api";

const initialState = {
  authUser: getAccessToken() ? jwtDecode(getAccessToken()) : null,
};

export const login = createAsyncThunk(
  "auth/login",
  //   async ({ emailOrUserName, password }) => {
  async ({ emailOrUserName, password }) => {
    const res = await authApi.loginApi({ emailOrUserName, password });
    setAccessToken(res.data.accessToken);
    const resUser = await authApi.getMeApi();
    return resUser.data.user;
  },
);

export const fetchAuthUser = createAsyncThunk("fetchAuthUser", async () => {
  try {
    const res = await authApi.getMeApi();
    return res.data.user;
  } catch (err) {
    removeAccessToken();
    console.error(err);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.authUser = null;
      removeAccessToken();
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.authUser = action.payload;
      })
      .addCase(fetchAuthUser.fulfilled, (state, action) => {
        state.authUser = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

// export const loginApi = createAsyncThunk(
//     "login",
//     async (emailOrUserName, password) => {
//       try {
//         const res = await authApi.loginApi({ emailOrUserName, password });
//         setAccessToken(res.data.accessToken);
//         return res.data.accessToken;
//       } catch (err) {
//         console.error(err);
//       }
//     },
//   );
// export const login = (emailOrUserName, password) => async (dispatch) => {
//   const res = await authApi.login({ emailOrUserName, password });
//   setAccessToken(res.data.accessToken);
//   dispatch(login(jwtDecode(res.data.accessToken)));
// };
