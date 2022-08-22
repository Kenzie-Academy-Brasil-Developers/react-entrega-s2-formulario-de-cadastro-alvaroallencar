import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiShow, BiHide } from "react-icons/bi";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  useUserContext,
  LoginForm as ILoginForm,
} from "../../Providers/UserContext";

import { FormDiv, FormLogin, EmailDiv, PasswordDiv } from "./styles";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [inputType, setInputType] = useState<string>("password");
  const { onSubmitLogin } = useUserContext();

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
  } = useForm<ILoginForm>({
    resolver: yupResolver(formSchema),
  });

  const displayPassword = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    setShowPassword(!showPassword);
    setInputType("text");
  };

  const hidePassword = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    setShowPassword(!showPassword);
    setInputType("password");
  };

  return (
    <>
      <FormDiv>
        <h2>Login</h2>
        <FormLogin onSubmit={handleSubmit(onSubmitLogin)}>
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
