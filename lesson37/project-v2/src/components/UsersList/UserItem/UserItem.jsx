import React from "react";
import style from "./UserItem.module.scss";
import { useNavigate } from "react-router-dom";
import { Button } from "../../UI";
import { useSelector } from "react-redux";
import { selectAuth } from "../../../ducks/auth.duck";

export function UserItem({
  user: { first_name, last_name, email, avatar, id },
}) {
  const fullName = `${first_name} ${last_name}`;
  const { img, item } = style;
  const navigate = useNavigate();
  const auth = useSelector(selectAuth);
  return (
    <li className={item}>
      <h3>{fullName}</h3>
      <p>{email}</p>
      <img className={img} src={avatar} alt={fullName} />
      {auth && (
        <Button
          onClick={() => {
            navigate(`user/${id}`);
          }}
        >
          Detail
        </Button>
      )}
    </li>
  );
}
