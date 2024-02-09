import React from "react";
import { useParams } from "react-router-dom";
import { useFetchUser } from "../../hooks";
import {UserInfo} from "./UserInfo";
import {FetchHoc} from "../FetchHoc";

export function UserCard() {
  const { id } = useParams();
  const { loading, error, user } = useFetchUser(id);

  return (
    <FetchHoc loading={loading} error={error}>
      <UserInfo user={user}/>
    </FetchHoc>
  );
}
