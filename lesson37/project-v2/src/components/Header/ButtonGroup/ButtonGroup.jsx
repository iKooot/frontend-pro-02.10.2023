import React from "react";
import style from "./ButtonGroup.module.scss";
import { Button, ThemeButton } from "../../UI";
import { useNavigate } from "react-router-dom";
import { useLogOut } from "../../../hooks";
import { selectAuth } from "../../../ducks/auth.duck";
import { useSelector } from "react-redux";

export function ButtonGroup() {
  const { container } = style;
  const navigate = useNavigate();
  const auth = useSelector(selectAuth);
  const logOutHandler = useLogOut();

  return (
    <div className={container}>
      <ThemeButton />
      {auth ? (
        <Button onClick={logOutHandler}>Log out</Button>
      ) : (
        <Button
          onClick={() => {
            navigate("/login");
          }}
        >
          Log in
        </Button>
      )}
    </div>
  );
}
