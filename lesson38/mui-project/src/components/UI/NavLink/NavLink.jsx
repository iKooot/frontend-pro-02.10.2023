import React from "react";
import { NavLink as RouterLink } from "react-router-dom";
import { styled } from "@mui/material";

const StyledNavLink = styled(RouterLink)(({ theme }) => {
  const { palette } = theme;
  return {
    textDecoration: "none",
    color: palette.text.primary,
    transition: "color 0.3s",
    "&:hover": {
      color: theme.palette.error.main,
    },
    "&.active": {
      fontWeight: "bold",
      color:
        palette.mode === "dark" ? palette.primary.main : palette.secondary.main,
    },
    ...(theme.breakpoints.up("md") && {
      fontSize: theme.typography.fontSize * 1.2,
    }),
  };
});

export const NavLink = ({ to, children }) => {
  return (
    <StyledNavLink
      to={to}
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      {children}
    </StyledNavLink>
  );
};
