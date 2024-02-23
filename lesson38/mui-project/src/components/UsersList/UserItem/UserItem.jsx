import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../UI";
import { useSelector } from "react-redux";
import { selectAuth } from "../../../ducks/auth.duck";
import { Paper, styled, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  display: "flex",
  flexDirection: "column",
  gap: 4,
}));

export function UserItem({ user: { name, surname, email, avatar, id } }) {
  const fullName = `${name} ${surname}`;
  const navigate = useNavigate();
  const auth = useSelector(selectAuth);

  return (
    <Item>
      <Typography
        variant="h5"
        sx={({ palette }) => ({ color: palette.text.primary })}
      >
        {fullName}
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontSize: { xs: "0.8rem", md: "1rem" } }}
      >
        {email}
      </Typography>
      <img
        src={avatar}
        alt={fullName}
        style={{ maxWidth: "100%", height: "auto" }}
      />
      {auth && (
        <Button
          onClick={() => {
            navigate(`user/${id}`);
          }}
        >
          <Typography>Detail</Typography>
        </Button>
      )}
    </Item>
  );
}
