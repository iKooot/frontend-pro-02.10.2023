import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import style from "./Navigation.module.scss";
import { UserInfoContext } from "../../../Context";

export function Navigation({ navAttrs }) {
  const { list, active, pending } = style;
  const { auth } = useContext(UserInfoContext);
  return (
    <nav {...navAttrs}>
      <ul className={list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isActive ? active : isPending ? pending : ""
            }
          >
            Home
          </NavLink>
        </li>
        {!auth && (
          <li>
            <NavLink
              to="/register"
              className={({ isActive, isPending }) =>
                isActive ? active : isPending ? pending : ""
              }
            >
              Registration
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
