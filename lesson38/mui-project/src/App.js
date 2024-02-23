import { Loader } from "./components";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import React, { useEffect, useMemo } from "react";
import { LocalStorage } from "./utils";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "./ducks/auth.duck";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
  CssBaseline,
} from "@mui/material";
import { getDesignToken } from "./services";
import { selectTheme } from "./ducks/theme.duck";
import "@fontsource/montserrat";

export function App() {
  const dispatch = useDispatch();
  const mode = useSelector(selectTheme);
  useEffect(() => {
    const token = LocalStorage.get(LocalStorage.USER_KEY);

    if (!token) return;

    dispatch(setAuth(token));
  }, [dispatch]);
  const theme = useMemo(() => createTheme(getDesignToken(mode)), [mode]);
  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <CssBaseline />
      <RouterProvider router={router} fallbackElement={<Loader />} />
    </ThemeProvider>
  );
}
