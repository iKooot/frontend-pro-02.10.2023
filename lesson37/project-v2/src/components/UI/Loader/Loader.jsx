import React from "react";
import style from "./Loader.module.scss";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../ducks/theme.duck";

export function Loader() {
  const theme = useSelector(selectTheme);
  const { spinner, container } = style;
  return (
    <div className={container}>
      <div className={spinner}>
        <div className={style[theme]}></div>
        <div className={style[theme]}></div>
      </div>
    </div>
  );
}
