import React from "react";
import { useFetchUsers } from "../../hooks";
import { UserItem } from "./UserItem";
import style from "./UsersList.module.scss";
import { FetchHoc } from "../FetchHoc";

export function UserList() {
  const { status, error, users } = useFetchUsers();
  const { list } = style;

  return (
    <FetchHoc status={status} error={error}>
      <ul className={list}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </FetchHoc>
  );
}
