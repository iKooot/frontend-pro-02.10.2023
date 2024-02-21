import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUser } from "../api";

/****************************************
 * DUCK
 ****************************************/

const initialState = {
  user: null,
  status: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserThunk.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.user = payload;
        state.error = null;
      })
      .addCase(fetchUserThunk.rejected, (state, { payload, error }) => {
        state.status = "error";
        state.error = payload || error.message;
      });
  },
  selectors: {
    selectUsers: (state) => state.users,
  },
});
export const selectUserSlice = userSlice.selectSlice;
export default userSlice.reducer;

/****************************************
 * THUNKS
 ****************************************/

export const fetchUserThunk = createAsyncThunk(
  "user/fetchUser",
  async (id, { rejectWithValue, signal }) => {
    try {
      const { data } = await getUser(id, signal);

      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);
