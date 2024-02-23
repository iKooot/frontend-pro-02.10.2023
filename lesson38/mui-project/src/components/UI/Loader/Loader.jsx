import React from "react";
import { Box, CircularProgress } from "@mui/material";

export function Loader() {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
}
