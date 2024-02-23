import React from "react";
import { Button as MiuButton } from "@mui/material";

export function Button({ onClick, type = "button", children, ...rest }) {
  return (
    <MiuButton
      type={type}
      onClick={onClick}
      variant="contained"
      size="small"
      {...rest}
    >
      {children}
    </MiuButton>
  );
}
