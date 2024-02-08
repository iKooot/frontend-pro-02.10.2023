import React, { useReducer, useState } from "react";
import {
  ThemeContextProvider,
  THEME_DARK,
  UsersDispatchProvider,
  UsersContextProvider,
  UserInfoContextProvider,
  UserInfoDispatchProvider,
} from "./Context";
import { initialUsersState, usersReducer } from "./services/state/users";
import {
  initialUserInfoState,
  userInfoReducer,
} from "./services/state/userInfo";
import { App } from "./App";

export function AppWrapper() {
  const [theme, setTheme] = useState(THEME_DARK);
  const [usersState, dispatchUsers] = useReducer(
    usersReducer,
    initialUsersState,
  );
  const [userInfoState, dispatchUserInfo] = useReducer(
    userInfoReducer,
    initialUserInfoState,
  );

  return (
    <ThemeContextProvider value={{ theme, setTheme }}>
      <UsersContextProvider value={usersState}>
        <UsersDispatchProvider value={dispatchUsers}>
          <UserInfoContextProvider value={userInfoState}>
            <UserInfoDispatchProvider value={dispatchUserInfo}>
              <App />
            </UserInfoDispatchProvider>
          </UserInfoContextProvider>
        </UsersDispatchProvider>
      </UsersContextProvider>
    </ThemeContextProvider>
  );
}
