/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { toast } from "react-toastify";
import {
   RegisterPageWrapper,
   RegisterHeader,
   RegisterSection,
} from "./register.styles";

import KenzieHubLogo from "../../assets/img/KenzieHubLogo.svg";

const Register = () => {
   // eslint-disable-next-line no-unused-vars
   const [user, setUser] = useState([]);
   const navigate = useNavigate();

   useEffect(() => {
      const tokenInLocalStorage = JSON.parse(
         localStorage.getItem("@KenzieHub:token")
      );

      const userInLocalStorage = JSON.parse(
         localStorage.getItem("@KenzieHub:user")
      );

      if (tokenInLocalStorage && userInLocalStorage) {
         setUser(userInLocalStorage);
         toast.info("You must logout to create a new user!", {
            theme: "dark",
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
         });
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
