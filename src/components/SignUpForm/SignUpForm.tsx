import { yupResolver } from "@hookform/resolvers/yup";
import { useId, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import css from "./SignUpForm.module.css";
import clsx from "clsx";
import { Link } from "react-router-dom";

import sprite from "../../images/sprite.svg";

type Inputs = {
  email: string;
  password: string;
  passwordRepeat: string;
};

const SignUpValidationSchema = yup
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
      .required("Password is required"),
  })
  .required();

const SignInForm = () => {
  const emailId = useId();
  const passwordId = useId();
  const passwordRepeatId = useId();

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isVisiblePasswordRepeat, setIsVisiblePasswordRepeat] = useState(false);

  const toggleVisiblePassword = () => {
    setIsVisiblePassword(!isVisiblePassword);
  };

  const toggleVisiblePasswordRepeat = () => {
    setIsVisiblePasswordRepeat(!isVisiblePasswordRepeat);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(SignUpValidationSchema) });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("email")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <p className={css.title}>Sign Up</p>

      <div className={clsx(css.wrapperLabel, css.wrapperLabelEmail)}>
        <label className={css.label} htmlFor={emailId}>
          Email
        </label>

        <div className={css.wrapperInput}>
          <input
            className={css.input}
            id={emailId}
            placeholder="Enter your email"
            {...register("email")}
          />
          <span className={css.error}>{errors.email?.message}</span>
        </div>
      </div>

      <div className={clsx(css.wrapperLabel, css.wrapperLabelPassword)}>
        <label className={css.label} htmlFor={passwordId}>
          Password
        </label>

        <div className={css.wrapperInput}>
          <input
            className={css.input}
            id={passwordId}
            type={isVisiblePassword ? "text" : "password"}
            placeholder="Enter your password"
            {...register("password")}
          />
          <button
            className={css.buttonEye}
            type="button"
            onClick={toggleVisiblePassword}
          >
            {!isVisiblePassword && (
              <svg className={css.eyeIcon}>
                <use href={`${sprite}#eye-icon`}></use>
              </svg>
            )}
            {isVisiblePassword && (
              <svg className={css.eyeIcon}>
                <use href={`${sprite}#eye-off-icon`}></use>
              </svg>
            )}
          </button>
          <span className={css.error}>{errors.password?.message}</span>
        </div>
      </div>

      <div className={clsx(css.wrapperLabel, css.wrapperLabelPassword)}>
        <label className={css.label} htmlFor={passwordRepeatId}>
          Repeat password
        </label>

        <div className={css.wrapperInput}>
          <input
            className={css.input}
            id={passwordRepeatId}
            type={isVisiblePasswordRepeat ? "text" : "password"}
            placeholder="Enter your password"
            {...register("passwordRepeat")}
          />
          <button
            className={css.buttonEye}
            type="button"
            onClick={toggleVisiblePasswordRepeat}
          >
            {!isVisiblePasswordRepeat && (
              <svg className={css.eyeIcon}>
                <use href={`${sprite}#eye-icon`}></use>
              </svg>
            )}
            {isVisiblePasswordRepeat && (
              <svg className={css.eyeIcon}>
                <use href={`${sprite}#eye-off-icon`}></use>
              </svg>
            )}
          </button>
          <span className={css.error}>{errors.passwordRepeat?.message}</span>
        </div>
      </div>

      <button className={css.button} type="submit">
        Sign Up
      </button>
      <p className={css.text}>
        Already have account?&#x20;
        <Link to="/signin" className={css.link}>
          Sign In
        </Link>
      </p>
    </form>
  );
};

export default SignInForm;
