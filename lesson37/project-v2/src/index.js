import React from "react";
import ReactDOM from "react-dom/client";
import { AppWrapper } from "./AppWrapper";
import "./services/style/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
);
