import React from "react";
import { useParams } from "react-router-dom";
import { useFetchUser } from "../../hooks";
import { UserInfo } from "./UserInfo";
import { FetchHoc } from "../FetchHoc";

export function UserCard() {
  const { id } = useParams();
  const { status, error, user } = useFetchUser(id);

  console.log(error)
  console.log(user)

  return (
    <FetchHoc status={status} error={error}>
      <UserInfo user={user} />
    </FetchHoc>
  );
}
