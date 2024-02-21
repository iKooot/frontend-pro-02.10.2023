import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signIn, signUp } from "../api";

/****************************************
 * DUCK
 ****************************************/

const initialState = {
  status: null,
  error: null,
  auth: false,
  token: null,
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    setAuth: (state, { payload }) => {
      state.auth = true;
      state.token = payload;
    },
    clearAuth: (state) => {
      state.auth = initialState.auth;
      state.token = initialState.token;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signInThunk.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.token = payload;
        state.auth = true;
        state.error = null;
      })
      .addCase(signInThunk.rejected, (state, { payload, error }) => {
        state.status = "error";
        state.error = payload || error.message;
      })
      .addCase(signUpThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signUpThunk.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.token = payload;
        state.auth = true;
        state.error = null;
      })
      .addCase(signUpThunk.rejected, (state, { payload, error }) => {
        state.status = "error";
        state.error = payload || error.message;
      });
  },
  selectors: {
    selectAuth: (state) => state.auth,
    selectAuthToken: (state) => state.token,
  },
});

export const { setAuth, clearAuth } = authSlice.actions;
export const { selectAuth, selectAuthToken } = authSlice.selectors;
export const selectAuthSlice = authSlice.selectSlice;
export default authSlice.reducer;

/****************************************
 * THUNK
 ****************************************/

export const signInThunk = createAsyncThunk(
  "auth/signIn",
  async (data, { rejectWithValue, signal }) => {
    try {
      const resp = await signIn(data, signal);

      if (resp.status >= 400) {
        return rejectWithValue(resp.message);
      }

      return resp.token;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const signUpThunk = createAsyncThunk(
  "auth/signUp",
  async (data, { rejectWithValue, signal }) => {
    try {
      const resp = await signUp(data, signal);

      if (resp.status >= 400) {
        return rejectWithValue(resp.message);
      }

      return resp.token;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
