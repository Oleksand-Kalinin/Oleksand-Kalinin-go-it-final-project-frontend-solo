// import * as Yup from "yup";
import { useId } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

const SignInForm = () => {
  const emailId = useId();
  const passwordId = useId();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("email")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>Sign In</p>
      {/* register your input into the hook by invoking the "register" function */}
      <label htmlFor={emailId}>Email</label>
      <input
        id={emailId}
        placeholder="Enter your email"
        {...register("email")}
      />

      {/* include validation with required or other standard HTML validation rules */}
      <label htmlFor={passwordId}>Password</label>
      <input id={passwordId} {...register("password", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.password && <span>This field is required</span>}

      <button type="submit">Sign In</button>
      <p>Don&#x2019;t have an account? Sign Up</p>
    </form>
  );
};

export default SignInForm;
