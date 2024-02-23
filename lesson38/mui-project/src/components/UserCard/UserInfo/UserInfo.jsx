import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../UI";
import { Box, Typography } from "@mui/material";

export function UserInfo({ user, error }) {
  const navigate = useNavigate();
  if (!user || error)
    return (
      <Typography
        variant="h2"
        sx={(theme) => ({
          color: theme.palette.error.main,
        })}
      >
        {error || "Information's of user not exist"}
      </Typography>
    );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h1">Name: {user.name}</Typography>
      <Typography variant="body1">Year: {user.year}</Typography>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        <Typography>Go back</Typography>
      </Button>
    </Box>
  );
}
