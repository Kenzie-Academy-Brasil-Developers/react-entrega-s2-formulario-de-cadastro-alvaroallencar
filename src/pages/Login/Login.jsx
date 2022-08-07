import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";

import { LoginPageWrapper, LoginSection } from "./login.styles";

import KenzieHubLogo from "../../assets/img/KenzieHubLogo.svg";

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
   const navigate = useNavigate();

   useEffect(() => {
      const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));
      if (token) {
         navigate("/home", { replace: true });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const handleGoToRegister = () => {
      navigate("/register", { replace: true });
   };

   return (
      <LoginPageWrapper
         as={motion.div}
         initial={{ x: -100, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         exit={{ x: 100, opacity: 0 }}
         transition={{ duration: 0.6 }}
      >
         <div>
            <img src={KenzieHubLogo} alt="Kenzie Hub Logo" />
         </div>
         <LoginSection>
            <LoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <div>
               <p>Don't have an account yet?</p>
               <button onClick={handleGoToRegister}>Register</button>
            </div>
         </LoginSection>
      </LoginPageWrapper>
   );
};

export default Login;
