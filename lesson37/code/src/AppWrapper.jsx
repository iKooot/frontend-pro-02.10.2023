import React from "react";
import { App } from "./App";
import { Provider } from "react-redux";
import store from './service/store';

export function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
