import { createSlice } from "@reduxjs/toolkit";

/****************************************
 * DUCK
 ****************************************/
const initialState = {
  mode: "dark",
};

const themeDuck = createSlice({
  initialState,
  name: "theme",
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
    },
  },
  selectors: {
    selectTheme: (state) => state.mode,
  },
});

export const { toggleTheme } = themeDuck.actions;
export const { selectTheme } = themeDuck.selectors;
export default themeDuck.reducer;
