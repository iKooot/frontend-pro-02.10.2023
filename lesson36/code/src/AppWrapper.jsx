import React from "react";
import { App } from "./App";
import { Provider } from 'react-redux';
import { store } from  './store';

export function AppWrapper() {
  return (
    <Provider store={store}>
        <App />
    </Provider>
  );
}
