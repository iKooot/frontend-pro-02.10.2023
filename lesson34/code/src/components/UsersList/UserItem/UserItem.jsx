import React, { useContext } from "react";
import style from "./UserItem.module.scss";
import { useNavigate } from "react-router-dom";
import { UserInfoContext } from "../../../Context";
import { Button } from "../../UI";

export function UserItem({
  user: { first_name, last_name, email, avatar, id },
}) {
  const fullName = `${first_name} ${last_name}`;
  const { img, item } = style;
  const navigate = useNavigate();
  const { auth } = useContext(UserInfoContext);
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
