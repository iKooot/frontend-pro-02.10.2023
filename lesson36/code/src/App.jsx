import React, { useEffect } from "react";
import { UserForm, UserList } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, selectUser } from "./store";

export function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchUsers("some argument", controller));

    return () => {
      controller.abort();
    };
  }, [dispatch]);
  return (
    <div>
      <h1>Hello redux</h1>
        {user.id  && <p>Current user is: {user.id}</p>}
      <h2>Add user</h2>
      <UserForm />
      <h3>Users list</h3>
      <UserList />
    </div>
  );
}
