import React from "react";
import { useFetchUsers } from "../../hooks";
import { UserItem } from "./UserItem";
import style from "./UsersList.module.scss";
import { FetchHoc } from "../FetchHoc";

export function UserList() {
  const { loading, error, users } = useFetchUsers();
  const { list } = style;

  return (
    <FetchHoc loading={loading} error={error}>
      <ul className={list}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </FetchHoc>
  );
}
