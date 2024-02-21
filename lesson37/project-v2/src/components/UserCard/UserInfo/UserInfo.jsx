import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../UI";

export function UserInfo({ user }) {
  const navigate = useNavigate();
  if (!user) return <p>Information's of user not exist</p>

  return (
    <div>
      <h1>Name: {user.name}</h1>
      <p>Year: {user.year}</p>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        Go back
      </Button>
    </div>
  );
}
