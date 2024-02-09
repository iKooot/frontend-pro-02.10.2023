import React, { useContext } from "react";
import style from "./Loader.module.scss";
import { themeContext } from "../../../Context";

export function Loader() {
  const { theme } = useContext(themeContext);
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
