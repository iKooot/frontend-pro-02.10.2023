import React, { useReducer, useState } from "react";
import { App } from "./App";
import {
  THEME_DARK,
  ThemeContextProvider,
  UsersContextProvider,
  UsersDispatchProvider,
} from "./context";
import { initialUsersState, usersReducer } from "./services";

export function AppWrapper() {
  const [theme, setTheme] = useState(THEME_DARK);
  const [usersState, dispatch] = useReducer(usersReducer, initialUsersState);
  return (
    <ThemeContextProvider value={{ theme, setTheme }}>
      <UsersContextProvider value={usersState}>
        <UsersDispatchProvider value={dispatch}>
          <App />
        </UsersDispatchProvider>
      </UsersContextProvider>
    </ThemeContextProvider>
  );
}
