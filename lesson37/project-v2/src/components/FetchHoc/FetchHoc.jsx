import React from "react";
import { ErrorMessage, Loader } from "../UI";

export function FetchHoc({ status, error, children }) {
  if (status === "loading") return <Loader />;
  if (status === "error") return <ErrorMessage content={error} />;
  return children;
}
