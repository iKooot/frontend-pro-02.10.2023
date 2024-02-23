import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, toggleTheme } from "../../../../ducks/theme.duck";
import { Box, FormControlLabel, styled, Switch } from "@mui/material";

const MySwitch = styled(Switch, { name: "MySwitch" })(({ theme }) => {
  const { palette } = theme;

  return {
    "& .MuiSwitch-switchBase.Mui-checked": {
      color:
        palette.mode === "dark" ? palette.primary.main : palette.secondary.main,
      "&:hover": {
        backgroundColor:
          palette.mode === "dark"
            ? palette.primary.light
            : palette.secondary.light,
        transition: "background-color 0.7s",
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor:
        palette.mode === "dark" ? palette.primary.main : palette.secondary.main,
      transition: "background-color 0.7s",
    },
  };
});
export function ThemeButton() {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const label = theme === "dark" ? "light" : "dark";

  const changeHandler = () => {
    dispatch(toggleTheme());
  };

  return (
    <Box>
      <FormControlLabel
        control={<MySwitch onChange={changeHandler} />}
        label={label}
      />
    </Box>
  );
}
