import React from "react";
import { ButtonGroup } from "./ButtonGroup";
import CatWork from "../../assets/cat-logo.png";
import { Navigation } from "./Navigation";
import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import style from "./Header.module.scss";

export function Header() {
  const { image, link } = style;
  return (
    <AppBar position="static">
      <Toolbar disableGutters sx={{ gap: 1, padding: 1 }}>
        <Link to="/" className={link}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <img src={CatWork} alt="Kat users" className={image} />
            <Typography
              variant="p"
              noWrap
              component="p"
              sx={{
                color: "text.primary",
                textDecoration: "none",
                transition: "color 0.3s",
                "&:hover": {
                  color: "text.secondary",
                },
              }}
            >
              Kat users
            </Typography>
          </Box>
        </Link>

        <Box sx={{ flexGrow: 1 }}>
          <Navigation />
        </Box>

        <ButtonGroup />
      </Toolbar>
    </AppBar>
  );
}
