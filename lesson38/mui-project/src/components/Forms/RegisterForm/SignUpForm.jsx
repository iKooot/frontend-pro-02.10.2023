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
import { signUpFormSchema } from "../../../services";

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

export function SignUpForm({ onSubmitHandler, loading }) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: ({ confirmPassword, ...data }, { resetForm }) => {
      onSubmitHandler(data);
      resetForm();
    },
    validationSchema: signUpFormSchema,
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
      <TextField
        margin="normal"
        required
        fullWidth
        name="confirmPassword"
        label="Confirm password"
        type="password"
        id="confirmPassword"
        autoComplete="confirm-password"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.confirmPassword &&
          Boolean(formik.errors.confirmPassword)
        }
        helperText={
          formik.touched.confirmPassword && formik.errors.confirmPassword
        }
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
      <StyledLink component={RouterLink} to="/login" variant="body2">
        <Typography>Do you have account? Sign In</Typography>
      </StyledLink>
    </Box>
  );
}
