import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navigation.module.scss";
import { useSelector } from "react-redux";
import { selectAuth } from "../../../ducks/auth.duck";

export function Navigation({ navAttrs }) {
  const { list, active, pending } = style;
  const auth = useSelector(selectAuth);
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
