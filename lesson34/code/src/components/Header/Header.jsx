import React from "react";
import { ButtonGroup } from "./ButtonGroup";
import style from "./Header.module.scss";
import CatWork from "../../assets/cat-logo.png";
import { Navigation } from "./Navigation";
import { Link } from "react-router-dom";

export function Header() {
  const { header, logo, navigation } = style;
  return (
    <div className={header}>
      <div className={logo}>
        <Link to="/">
          <img src={CatWork} alt="Kat users" />
          <h3>Kat users</h3>
        </Link>
      </div>
      <Navigation navAttrs={{ className: navigation }} />
      <ButtonGroup />
    </div>
  );
}
