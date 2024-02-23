import React from "react";
import { Box, Typography } from "@mui/material";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <Box py={3}>
      <Typography align="center">Designed by &copy; iKot {year}</Typography>
    </Box>
  );
}
