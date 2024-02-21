/****************************************
 * DUCK
 ****************************************/
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../api";

const initialState = {
  users: [],
  status: null,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsersThunk.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.users = payload;
        state.error = null;
      })
      .addCase(fetchUsersThunk.rejected, (state, { error, payload }) => {
        state.status = "error";
        state.error = error.message || payload;
      });
  },
  selectors: {
    selectUsers: (state) => state.users,
  },
});
export const selectUsersSlice = usersSlice.selectSlice;
export default usersSlice.reducer;

/****************************************
 * THUNKS
 ****************************************/

export const fetchUsersThunk = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue, signal }) => {
    try {
      const { data } = await getUsers(signal);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
