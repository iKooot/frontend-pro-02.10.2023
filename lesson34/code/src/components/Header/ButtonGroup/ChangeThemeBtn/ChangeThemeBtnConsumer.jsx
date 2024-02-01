import React from "react";
import {
  THEME_DARK,
  THEME_LIGHT,
  ThemeContextConsumer,
} from "../../../../context/Theme.context";

export function ChangeThemeBtnConsumer({ className = "", onClick, ...rest }) {
  return (
    <ThemeContextConsumer>
      {({ theme, setTheme }) => {
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
            Consumer {content}
          </button>
        );
      }}
    </ThemeContextConsumer>
  );
}
