// import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useId, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import css from "./SignInForm.module.css";
import clsx from "clsx";
import { Link } from "react-router-dom";

import sprite from "../../images/sprite.svg";

type Inputs = {
  email: string;
  password: string;
};

const SignInValidationSchema = yup
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

const SignInForm = () => {
  const emailId = useId();
  const passwordId = useId();

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const toggleVisiblePassword = () => {
    setIsVisiblePassword(!isVisiblePassword);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(SignInValidationSchema) });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("email")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <p className={css.title}>Sign In</p>

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

      <button className={css.button} type="submit">
        Sign In
      </button>
      <p className={css.text}>
        Don&#x2019;t have an account?&#x20;
        <Link to="/signup" className={css.link}>
          Sign Up
        </Link>
      </p>
    </form>
  );
};

export default SignInForm;
