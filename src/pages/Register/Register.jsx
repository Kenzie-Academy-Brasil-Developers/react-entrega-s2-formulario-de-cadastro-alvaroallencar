/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import {
   RegisterPageWrapper,
   RegisterHeader,
   RegisterSection,
} from "./register.styles";

import KenzieHubLogo from "../../assets/img/KenzieHubLogo.svg";

const Register = () => {
   const navigate = useNavigate();

   useEffect(() => {
      const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));
      if (token) {
         navigate("/home", { replace: true });
      }
   }, []);

   const handleBackToLogin = () => {
      navigate("/login", { replace: true });
   };

   return (
      <RegisterPageWrapper
         as={motion.div}
         initial={{ x: 100, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         transition={{ duration: 0.6 }}
      >
         <RegisterHeader>
            <figure>
               <img src={KenzieHubLogo} alt="Kenzie Hub Logo" />
            </figure>
            <button onClick={handleBackToLogin}>Back</button>
         </RegisterHeader>
         <RegisterSection>
            <RegisterForm />
         </RegisterSection>
      </RegisterPageWrapper>
   );
};

export default Register;
