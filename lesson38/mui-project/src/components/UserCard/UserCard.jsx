import React from "react";
import { useParams } from "react-router-dom";
import { useFetchUser } from "../../hooks";
import { UserInfo } from "./UserInfo";
import { Loader } from "../UI";

export function UserCard() {
  const { id } = useParams();
  const { status, error, user } = useFetchUser(id);

  if (status === "loading") <Loader />;

  return <UserInfo user={user} error={error} />;
}
