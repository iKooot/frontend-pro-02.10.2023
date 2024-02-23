import * as yup from "yup";

export const singInFormScheme = yup.object().shape({
  email: yup
    .string()
    .required("This field is required")
    .email("This must to be email"),
  password: yup
    .string()
    .required("This field is required")
    .min(6, "Password must be at least 6 characters")
    .max(12, "Password must not exceed 12 characters"),
});

export const signUpFormSchema = yup.object().shape({
  email: yup
    .string()
    .required("This field is required")
    .email("This must be an email"),
  password: yup
    .string()
    .required("This field is required")
    .min(6, "Password must be at least 6 characters")
    .max(12, "Password must not exceed 12 characters"),
  confirmPassword: yup
    .string()
    .required("This field is required")
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .min(6, "Password must be at least 6 characters")
    .max(12, "Password must not exceed 12 characters"),
});
