import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";

import apiRequests from "../../services/apiRequests";

import styled from "./LoginForm.module.css";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState("password");
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .trim()
      .required("Email required")
      .email("Invalid email"),
    password: yup.string().trim().required("Password required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

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

  const onSubmitFunction = (formData) => {
    console.log(formData);
    apiRequests
      .post("/sessions", formData)
      .then((res) => {
        if (res.data.token) {
          console.log(res.data);
          localStorage.setItem(
            "@KenzieHub:user",
            JSON.stringify(res.data.user)
          );
          localStorage.setItem(
            "@KenzieHub:token",
            JSON.stringify(res.data.token)
          );
          navigate("/home", { replace: true });
        }
      })
      .catch((err) => console.log(err));
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
          {errors.email?.message ? (
            <p className={styled.errorMessage}>{errors.email?.message}</p>
          ) : (
            <p className={styled.errorMessage}>
              <br />
            </p>
          )}
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
          {errors.password?.message ? (
            <p className={styled.errorMessage}>{errors.password?.message}</p>
          ) : (
            <p className={styled.errorMessage}>
              <br />
            </p>
          )}
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
