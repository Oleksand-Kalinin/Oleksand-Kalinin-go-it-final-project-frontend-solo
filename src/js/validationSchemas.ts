import * as yup from "yup";

export const SignInValidationSchema = yup
  .object({
    email: yup
      .string()
      .email("Incorrect email address")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "The password must be at least 8 characters long")
      .required("Password is required"),
  })
  .required();

export const SignUpValidationSchema = yup
  .object({
    email: yup
      .string()
      .email("Incorrect email address")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "The password must be at least 8 characters long")
      .required("Password is required"),
    passwordRepeat: yup
      .string()
      .min(8, "The password must be at least 8 characters long")
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Please retype your password."),
  })
  .required();
