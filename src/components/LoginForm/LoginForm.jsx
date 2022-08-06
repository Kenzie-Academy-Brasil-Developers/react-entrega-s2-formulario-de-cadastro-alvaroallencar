import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";

import styled from "./LoginForm.module.css";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState("password");

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .trim()
      .required("Email required")
      .email("Email inválido"),
    password: yup.string().trim().required("Password required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (formData) => {
    console.log(formData);
  };

  const displayPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
    setInputType("text");
  };

  const hidePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
    setInputType("password");
  };

  return (
    <>
      <h2 className={styled.loginTitle}>Login</h2>
      <form
        className={styled.loginForm}
        onSubmit={handleSubmit(onSubmitFunction)}
      >
        <div className={styled.emailDiv}>
          <label htmlFor="loginEmail">Email</label>
          <input
            type="email"
            placeholder="Your email here"
            id="loginEmail"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
        </div>
        <div className={styled.passwordDiv}>
          <label htmlFor="loginPassword">Password</label>
          <div>
            <input
              type={inputType}
              placeholder="Your password here"
              id="loginPassword"
              {...register("password")}
            />
            {showPassword === false ? (
              <button onClick={displayPassword}>
                <BiShow />
              </button>
            ) : (
              <button onClick={hidePassword}>
                <BiHide />
              </button>
            )}
          </div>
          <p>{errors.password?.message}</p>
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
