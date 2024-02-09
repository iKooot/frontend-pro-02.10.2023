import React from "react";
import { ErrorMessage, Loader } from "../UI";

export function FetchHoc({ loading, error, children }) {
  if (loading) return <Loader />;
  if (error) return <ErrorMessage content={error} />;
  return children;
}
