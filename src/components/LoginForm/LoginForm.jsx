import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import apiRequests from "../../services/apiRequests";

import { FormDiv, FormLogin, EmailDiv, PasswordDiv } from "./loginForm.styles";

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
               toast.success(`Welcome ${res.data.user.name}!`, {
                  theme: "dark",
                  position: "bottom-right",
                  autoClose: 3000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
               });
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
         .catch((err) => {
            console.log(err.response.data.message);
            toast.warn(`${err.response.data.message}!`, {
               theme: "dark",
               position: "bottom-right",
               autoClose: 3000,
               hideProgressBar: true,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
            });
         });
   };

   return (
      <>
         <FormDiv>
            <h2>Login</h2>
            <FormLogin onSubmit={handleSubmit(onSubmitFunction)}>
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
