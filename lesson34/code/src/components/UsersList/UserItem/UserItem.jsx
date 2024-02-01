import React from "react";
import style from "./UserItem.module.scss";

export function UserItem({ user: { first_name, last_name, email, avatar } }) {
  const fullName = `${first_name} ${last_name}`;
  const { img, item} = style;
  return (
    <li className={item}>
      <h3>{fullName}</h3>
      <p>{email}</p>
      <img className={img} src={avatar} alt={fullName} />
    </li>
  );
}
