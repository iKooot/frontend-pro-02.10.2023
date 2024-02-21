import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../ducks/users.duck";
import userReducer from "../ducks/user.duck";
import authReducer from "../ducks/auth.duck";
import themeDuck from "../ducks/theme.duck";

const store = configureStore({
  reducer: {
    users: usersReducer,
    user: userReducer,
    auth: authReducer,
    theme: themeDuck,
  },
  devTools: true,
});

export default store;
