import React from "react";
import { Loader } from "../UI";
import { useFetchUsers } from "../../hooks";
import { UserItem } from "./UserItem";
import style from './UsersList.module.scss';

export function UserList() {
  const { loading, error, users } = useFetchUsers();
  const { list } = style;
  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <ul className={list}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
}
