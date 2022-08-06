import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

import apiRequests from "../../services/apiRequests";

import styled from "./RegisterForm.module.css";

const RegisterForm = () => {
  const navigate = useNavigate();

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
        // eslint-disable-next-line no-useless-escape
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\.*])(?=.{8,})/,
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

  const onSubmitFunction = (formData) => {
    console.log(formData);
    apiRequests
      .post("/users", formData)
      .then((res) => {
        if (res.data.id) {
          console.log(res.data);
          navigate("/login", { replace: true });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className={styled.titleBox}>
        <h2>Register</h2>
        <p>Fast and free, let's go!</p>
      </div>
      <form
        className={styled.registerForm}
        onSubmit={handleSubmit(onSubmitFunction)}
      >
        <div className={styled.nameDiv}>
          <label htmlFor="registerName">Name</label>
          <input
            type="text"
            placeholder="Your name here"
            id="registerName"
            {...register("name")}
          />
          {errors.name?.message ? (
            <p className={styled.errorMessage}>{errors.name?.message}</p>
          ) : (
            <p className={styled.errorMessage}>
              <br />
            </p>
          )}
        </div>
        <div className={styled.emailDiv}>
          <label htmlFor="registerEmail">Email</label>
          <input
            type="email"
            placeholder="Your email here"
            id="registerEmail"
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
          <label htmlFor="registerPassword">Password</label>
          <input
            type="password"
            placeholder="Your password here"
            id="registerPassword"
            {...register("password")}
          />
          {errors.password?.message ? (
            <p className={styled.errorMessage}>{errors.password?.message}</p>
          ) : (
            <p className={styled.errorMessage}>
              <br />
            </p>
          )}
        </div>
        <div className={styled.confirmPasswordDiv}>
          <label htmlFor="confirmRegisterPassword">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password here"
            id="confirmRegisterPassword"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword?.message ? (
            <p className={styled.errorMessage}>
              {errors.confirmPassword?.message}
            </p>
          ) : (
            <p className={styled.errorMessage}>
              <br />
            </p>
          )}
        </div>
        <div className={styled.userBioDiv}>
          <label htmlFor="userBio">Bio</label>
          <input
            type="text"
            placeholder="Tell us about yourself"
            id="userBio"
            {...register("bio")}
          />
          {errors.bio?.message ? (
            <p className={styled.errorMessage}>{errors.bio?.message}</p>
          ) : (
            <p className={styled.errorMessage}>
              <br />
            </p>
          )}
        </div>
        <div className={styled.registerContactDiv}>
          <label htmlFor="registerContact">Contact</label>
          <input
            type="text"
            placeholder="Your phone number here"
            id="registerContact"
            {...register("contact")}
          />
          {errors.contact?.message ? (
            <p className={styled.errorMessage}>{errors.contact?.message}</p>
          ) : (
            <p className={styled.errorMessage}>
              <br />
            </p>
          )}
        </div>
        <div className={styled.registerModuleDiv}>
          <label htmlFor="registerModule">Contact</label>
          <select name="" id="registerModule" {...register("course_module")}>
            <option value="firstModule">First Module</option>
            <option value="secondModule">Second Module</option>
            <option value="thirdModule">Third Module</option>
            <option value="fourthModule">Fourth Module</option>
            <option value="fifthModule">Fifth Module</option>
            <option value="sixthModule">Sixth Module</option>
          </select>
          <p className={styled.errorMessage}>{errors.course_module?.message}</p>
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterForm;
