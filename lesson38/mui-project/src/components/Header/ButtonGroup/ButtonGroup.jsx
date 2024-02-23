import React from "react";
import { ThemeButton } from "../../UI";
import { useNavigate } from "react-router-dom";
import { useSignOut } from "../../../hooks";
import { selectAuth } from "../../../ducks/auth.duck";
import { useSelector } from "react-redux";
import { Box, Button as MiuButton, styled, Typography } from "@mui/material";

const MyButton = styled(MiuButton)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.primary.main
      : theme.palette.secondary.main,
  color:
    theme.palette.mode === "dark"
      ? theme.palette.secondary.contrastText
      : theme.palette.primary.contrastText,
  "&:hover": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? theme.palette.primary.light
        : theme.palette.secondary.light,
  },
}));

export function ButtonGroup() {
  const navigate = useNavigate();
  const auth = useSelector(selectAuth);
  const signOutHandler = useSignOut();

  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
      }}
    >
      <ThemeButton />
      {auth ? (
        <MyButton onClick={signOutHandler}>
          <Typography
            sx={{
              fontWeight: 700,
            }}
          >
            Sign out
          </Typography>
        </MyButton>
      ) : (
        <MyButton
          onClick={() => {
            navigate("/login");
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
            }}
          >
            Sign in
          </Typography>
        </MyButton>
      )}
    </Box>
  );
}
