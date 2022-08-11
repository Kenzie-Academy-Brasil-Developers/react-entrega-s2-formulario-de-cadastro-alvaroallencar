/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import { toast } from "react-toastify";
import apiRequests from "../../services/apiRequests";
import { UserContext } from "../../contexts/UserContext";

import { LoginPageWrapper, LoginSection } from "./login.styles";

import KenzieHubLogo from "../../assets/img/KenzieHubLogo.svg";

const Login = () => {
   const navigate = useNavigate();
   // eslint-disable-next-line no-unused-vars
   // const [user, setUser] = useState([]);
   const { user } = useContext(UserContext);

   useEffect(() => {
      async function getUser() {
         // const token = localStorage.getItem("@KenzieHub:token");
         if (user) {
            toast.info("You are already logged in!", {
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
         // if (token) {
         //    try {
         //       apiRequests.defaults.headers.authorization = `Bearer ${token}`;

         //       const { data } = await apiRequests.get("/profile");
         //       // setUser(data);
         //    } catch (err) {
         //       console.error(err);
         //    }
         // }
         // setLoading(false);
      }
      getUser();
   }, []);
   // useEffect(() => {
   //    const tokenInLocalStorage = JSON.parse(
   //       localStorage.getItem("@KenzieHub:token")
   //    );

   //    const userInLocalStorage = JSON.parse(
   //       localStorage.getItem("@KenzieHub:user")
   //    );

   //    if (tokenInLocalStorage && userInLocalStorage) {
   //       setUser(userInLocalStorage);
   //       toast.info("You are already logged in!", {
   //          theme: "dark",
   //          position: "bottom-right",
   //          autoClose: 3000,
   //          hideProgressBar: true,
   //          closeOnClick: true,
   //          pauseOnHover: true,
   //          draggable: true,
   //          progress: undefined,
   //       });
   //       navigate("/home", { replace: true });
   //    } else {
   //       navigate("/login", { replace: true });
   //    }
   // }, []);

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
         <figure>
            <img src={KenzieHubLogo} alt="Kenzie Hub Logo" />
         </figure>
         <LoginSection>
            <LoginForm />
            <div>
               <p>Don't have an account yet?</p>
               <button onClick={handleGoToRegister}>Register</button>
            </div>
         </LoginSection>
      </LoginPageWrapper>
   );
};

export default Login;
