import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { BiShow, BiHide } from "react-icons/bi";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { UserContext } from "../../pages/UserContext";

import { FormDiv, FormLogin, EmailDiv, PasswordDiv } from "./loginForm.styles";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState("password");
  const { onSubmitLoginFunction } = useContext(UserContext);

  // Yup validations:

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .trim()
      .required("Email required")
      .email("Invalid email"),
    password: yup.string().trim().required("Password required"),
  });

  // instance of useForm:

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  // functions to control password display:

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
      <FormDiv>
        <h2>Login</h2>
        <FormLogin onSubmit={handleSubmit(onSubmitLoginFunction)}>
          <EmailDiv>
            <label htmlFor="loginEmail">Email</label>
            <input
              type="text"
              placeholder="Your email here"
              id="loginEmail"
              {...register("email")}
            />
            {errors.email?.message ? (
              <p>{errors.email?.message}</p>
            ) : (
              <p>
                <br />
              </p>
            )}
          </EmailDiv>
          <PasswordDiv>
            <label htmlFor="loginPassword">Password</label>
            <div>
              <input
                type={inputType}
                placeholder="Your password here"
                id="loginPassword"
                {...register("password")}
              />
              {showPassword === false ? (
                <p onClick={displayPassword}>
                  <BiShow />
                </p>
              ) : (
                <p onClick={hidePassword}>
                  <BiHide />
                </p>
              )}
            </div>
            {errors.password?.message ? (
              <p>{errors.password?.message}</p>
            ) : (
              <p>
                <br />
              </p>
            )}
          </PasswordDiv>
          <button type="submit">Login</button>
        </FormLogin>
      </FormDiv>
    </>
  );
};

export default LoginForm;
