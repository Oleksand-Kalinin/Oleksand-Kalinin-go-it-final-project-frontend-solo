// import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useId } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";

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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(SignInValidationSchema) });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("email")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>Sign In</p>
      <label htmlFor={emailId}>Email</label>
      <input
        id={emailId}
        placeholder="Enter your email"
        {...register("email")}
      />
      <span>{errors.email?.message}</span>

      <label htmlFor={passwordId}>Password</label>
      <input
        id={passwordId}
        type="password"
        placeholder="Enter your password"
        {...register("password")}
      />
      <span>{errors.password?.message}</span>

      <button type="submit">Sign In</button>
      <p>Don&#x2019;t have an account? Sign Up</p>
    </form>
  );
};

export default SignInForm;
