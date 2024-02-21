import React from "react";
import style from "./ErrorMessage.module.scss";

export function ErrorMessage({ content }) {
  const { message } = style;
  return <p className={message}>{content}</p>;
}
