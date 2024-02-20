import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearUsers, selectUsers } from "../../ducks/users.duck";

export function UserList() {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  if (!users.length) return <p>You dont have users</p>;
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          Name: {user.name}, Surname: {user.surname}
        </li>
      ))}
      {users.length && (
        <li>
          <button onClick={() => dispatch(clearUsers())}>Clear users</button>
        </li>
      )}
    </ul>
  );
}
