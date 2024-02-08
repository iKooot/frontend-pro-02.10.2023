import React, { useContext } from "react";
import style from "./ButtonGroup.module.scss";
import { Button, ThemeButton } from "../../UI";
import { useNavigate } from "react-router-dom";
import { UserInfoContext } from "../../../Context";
import { useLogOut } from "../../../hooks";

export function ButtonGroup() {
  const { container } = style;
  const navigate = useNavigate();
  const { auth } = useContext(UserInfoContext);
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
