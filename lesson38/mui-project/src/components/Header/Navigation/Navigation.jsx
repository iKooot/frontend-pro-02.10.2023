import React from "react";
import { NavLink } from "../../UI";
import { useSelector } from "react-redux";
import { selectAuth } from "../../../ducks/auth.duck";
import { Box, Container } from "@mui/material";

export function Navigation() {
  const auth = useSelector(selectAuth);
  return (
    <Container component="nav">
      <Box
        component="ul"
        sx={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          gap: 1,
        }}
      >
        <Box component="li">
          <NavLink to="/">Home</NavLink>
        </Box>
        {!auth && (
          <Box component="li">
            <NavLink to="/register">Registration</NavLink>
          </Box>
        )}
      </Box>
    </Container>
  );
}
