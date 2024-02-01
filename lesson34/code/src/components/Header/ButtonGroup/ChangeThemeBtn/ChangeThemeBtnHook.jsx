import React, { useContext } from "react";
import { THEME_DARK, THEME_LIGHT, themeContext } from "../../../../context";

export function ChangeThemeBtnHook({ className = "", onClick, ...rest }) {
  const { theme, setTheme } = useContext(themeContext);
  const content = theme === "dark" ? "light" : "dark";

  const clickHandler = (e) => {
    if (onClick) onClick(e);
    setTheme((prevTheme) =>
      prevTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK,
    );
  };

  return (
    <button
      className={`${className} ${theme}`}
      onClick={clickHandler}
      {...rest}
    >
      Hook {content}
    </button>
  );
}
