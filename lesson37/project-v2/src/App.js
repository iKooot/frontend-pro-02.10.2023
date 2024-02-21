import { Loader } from "./components";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import React, { useEffect } from "react";
import { LocalStorage } from "./utils";
import { useDispatch } from "react-redux";
import { setAuth } from "./ducks/auth.duck";

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = LocalStorage.get(LocalStorage.USER_KEY);

    if (!token) return;

    dispatch(setAuth(token));
  }, [dispatch]);
  return <RouterProvider router={router} fallbackElement={<Loader />} />;
}
