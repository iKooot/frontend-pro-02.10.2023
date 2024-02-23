import React from "react";
import { Button, Loader } from "../../UI";
import { useFormik } from "formik";
import {
  Box,
  styled,
  TextField,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { singInFormScheme } from "../../../services";

const StyledLink = styled(MuiLink)(({ theme }) => {
  const { palette } = theme;
  return {
    color:
      palette.mode === "dark" ? palette.primary.main : palette.secondary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  };
});

export function SignInForm({ onSubmitHandler, loading }) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (data, { resetForm }) => {
      onSubmitHandler(data);
      resetForm();
    },
    validationSchema: singInFormScheme,
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      noValidate
      sx={{ mt: 1 }}
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      {loading ? (
        <Loader />
      ) : (
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, fontWeight: 700 }}
        >
          Sign In
        </Button>
      )}
      <StyledLink component={RouterLink} to="/register" variant="body2">
        <Typography>Don't have an account? Sign Up</Typography>
      </StyledLink>
    </Box>
  );
}
