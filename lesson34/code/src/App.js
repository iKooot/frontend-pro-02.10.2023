import { Loader } from "./components";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { UserInfoDispatchContext } from "./Context";
import { LocalStorage } from "./utils";
import { AUTH_USER } from "./services/state/userInfo";

export function App() {
  const dispatch = useContext(UserInfoDispatchContext);
  useEffect(() => {
    const token = LocalStorage.get(LocalStorage.USER_KEY);

    if (!token) return;

    dispatch({ type: AUTH_USER, payload: true });
  }, [dispatch]);
  return <RouterProvider router={router} fallbackElement={<Loader />} />;
}
