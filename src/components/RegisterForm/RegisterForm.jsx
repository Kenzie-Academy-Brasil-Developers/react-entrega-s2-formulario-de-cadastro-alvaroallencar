import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import {
  RegisterFormWrapper,
  TitleDiv,
  FormRegister,
  InputContainer,
} from "./registerForm.styles";

const RegisterForm = () => {
  const { onSubmitRegister } = useContext(UserContext);

  const formSchema = yup.object().shape({
    name: yup.string().trim().required("Name required"),
    email: yup
      .string()
      .trim()
      .required("Email required")
      .email("Invalid email"),
    password: yup
      .string()
      .trim()
      .required("Password required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&.*])(?=.{8,})/,
        "Must contain at least 8 characters, 1 lowercase, 1 uppercase, 1 number and 1 special character"
      ),
    confirmPassword: yup
      .string()
      .trim()
      .required("Confirm password required")
      .oneOf([yup.ref("password")], "Passwords must match"),
    bio: yup.string().trim().required("Bio required"),
    contact: yup.string().trim().required("Contact required"),
    course_module: yup.string().required("Module required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <RegisterFormWrapper>
      <TitleDiv>
        <h2>Register</h2>
        <p>Fast and free, let's go!</p>
      </TitleDiv>
      <FormRegister onSubmit={handleSubmit(onSubmitRegister)}>
        <InputContainer>
          <label htmlFor="registerName">Name</label>
          <input
            type="text"
            placeholder="Your name here"
            id="registerName"
            {...register("name")}
          />
          {errors.name?.message ? (
            <p>{errors.name?.message}</p>
          ) : (
            <p>
              <br />
            </p>
          )}
        </InputContainer>
        <InputContainer>
          <label htmlFor="registerEmail">Email</label>
          <input
            type="email"
            placeholder="Your email here"
            id="registerEmail"
            {...register("email")}
          />
          {errors.email?.message ? (
            <p>{errors.email?.message}</p>
          ) : (
            <p>
              <br />
            </p>
          )}
        </InputContainer>
        <InputContainer>
          <label htmlFor="registerPassword">Password</label>
          <input
            type="password"
            placeholder="Your password here"
            id="registerPassword"
            {...register("password")}
          />
          {errors.password?.message ? (
            <p>{errors.password?.message}</p>
          ) : (
            <p>
              <br />
            </p>
          )}
        </InputContainer>
        <InputContainer>
          <label htmlFor="confirmRegisterPassword">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password here"
            id="confirmRegisterPassword"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword?.message ? (
            <p>{errors.confirmPassword?.message}</p>
          ) : (
            <p>
              <br />
            </p>
          )}
        </InputContainer>
        <InputContainer>
          <label htmlFor="userBio">Bio</label>
          <input
            type="text"
            placeholder="Tell us about yourself"
            id="userBio"
            {...register("bio")}
          />
          {errors.bio?.message ? (
            <p>{errors.bio?.message}</p>
          ) : (
            <p>
              <br />
            </p>
          )}
        </InputContainer>
        <InputContainer>
          <label htmlFor="registerContact">Contact</label>
          <input
            type="text"
            placeholder="Your phone number here"
            id="registerContact"
            {...register("contact")}
          />
          {errors.contact?.message ? (
            <p>{errors.contact?.message}</p>
          ) : (
            <p>
              <br />
            </p>
          )}
        </InputContainer>
        <InputContainer>
          <label htmlFor="registerModule">Contact</label>
          <select name="" id="registerModule" {...register("course_module")}>
            <option value="First Module">First Module</option>
            <option value="Second Module">Second Module</option>
            <option value="Third Module">Third Module</option>
            <option value="Fourth Module">Fourth Module</option>
            <option value="Fifth Module">Fifth Module</option>
            <option value="Sixth Module">Sixth Module</option>
          </select>
          <p>{errors.course_module?.message}</p>
        </InputContainer>
        <button type="submit">Register</button>
      </FormRegister>
    </RegisterFormWrapper>
  );
};

export default RegisterForm;
