import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {getUsers} from "../api";

/****************************************
 * DUCK
 ****************************************/

const initialState = {
  users: [],
  status: null,
  error: null,
};

const usersSlice = createSlice({
  initialState,
  name: "users",
  reducers: {
    clearUsers: (state) => {
      state.users = initialState.users;
      state.status = initialState.status;
      state.error = initialState.error;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsersThunk.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.users = payload;
      })
      .addCase(fetchUsersThunk.rejected, (state, { payload }) => {
        state.status = "error";
        state.error = payload;
      });
  },
  selectors: {
    selectUsers: (state) => state.users,
  },
});

export const { clearUsers } = usersSlice.actions;
export const { selectUsers } = usersSlice.selectors;
export default usersSlice.reducer;

/****************************************
 * THUNK
 ****************************************/

export const fetchUsersThunk = createAsyncThunk(
  "users/fetchUsersThunk",
  async (_, { signal, rejectWithValue }) => {
    try {
      const { data } = await getUsers(signal)

      const preparedData = data.map((el) => ({
        id: el.id,
        name: el.first_name,
        surname: el.last_name,
      }));

      return preparedData;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.message);
    }
  },
);
