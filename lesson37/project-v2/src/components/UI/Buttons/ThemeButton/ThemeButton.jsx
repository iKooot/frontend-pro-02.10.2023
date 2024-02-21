import React from "react";
import style from "./ThemeButton.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, toggleTheme } from "../../../../ducks/theme.duck";

export function ThemeButton() {
  const { switcher, slider, container } = style;
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const content = theme === "dark" ? "light" : "dark";

  const clickHandler = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={container}>
      <label className={switcher}>
        <input type="checkbox" onChange={clickHandler} />
        <span className={slider}></span>
      </label>
      {content}
    </div>
  );
}
