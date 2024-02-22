import React from "react";
import { styled, Button } from "@mui/material";

const StyledButton = styled(Button, { name: "MyButton" })((props) => {
  const { theme, ...rest } = props;
  console.log(theme)
  return {
    backgroundColor: "#333",
  };
});

export function MyButton({ children }) {
  return <StyledButton sx={{ color: "red" }}>{children}</StyledButton>;
}
