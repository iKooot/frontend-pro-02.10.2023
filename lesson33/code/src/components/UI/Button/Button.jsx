import React from "react";
import style from "./Button.module.scss";

export function Button({ children, onClick, attrs }) {
  return (
    <button className={attrs.className ? attrs.className : style.button} onClick={onClick} {...attrs}>
      {children}
    </button>
  );
}
