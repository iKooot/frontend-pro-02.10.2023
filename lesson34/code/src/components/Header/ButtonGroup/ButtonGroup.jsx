import React from "react";
import { ChangeThemeBtnConsumer, ChangeThemeBtnHook } from "./ChangeThemeBtn";
import style from "./ButtonGroup.module.scss";

export function ButtonGroup() {
  const { container } = style;
  return (
    <div className={container}>
      <ChangeThemeBtnConsumer />
      <ChangeThemeBtnHook />
    </div>
  );
}
