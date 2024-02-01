import React from "react";
import { ButtonGroup } from "./ButtonGroup";
import style from "./Header.module.scss";
import CatWork from "../../assets/cat-logo.png";

export function Header() {
  const { header, logo  } = style;
  return (
    <div className={header}>
        <div className={logo}>
            <a href="/">
                <img src={CatWork} alt="Kat users" />
                <h3>Kat users</h3>
            </a>
        </div>
      <ButtonGroup />
    </div>
  );
}
