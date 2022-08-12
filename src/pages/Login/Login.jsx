/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LoginForm from "../../components/LoginForm/LoginForm";
import apiRequests from "../../services/apiRequests";
import { UserContext } from "../../contexts/UserContext";
import { VscLoading } from "react-icons/vsc";

import { LoginPageWrapper, LoginSection, LoadingMessage } from "./login.styles";

import KenzieHubLogo from "../../assets/img/KenzieHubLogo.svg";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser, loading } = useContext(UserContext);

  useEffect(() => {
    async function getUser() {
      const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

      if (token) {
        apiRequests.defaults.headers.authorization = `Bearer ${token}`;

        await apiRequests
          .get("/profile")
          .then((res) => {
            setUser(res.data);

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

            const toNavigate = location.state?.from?.pathname || "/home";

            navigate(toNavigate, { replace: true });
          })
          .catch((err) => console.log(err));
      }
    }

    getUser();
  }, []);

  const handleGoToRegister = () => {
    navigate("/register", { replace: true });
  };

  return loading === false ? (
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
  ) : (
    <LoadingMessage>
      <VscLoading />
    </LoadingMessage>
  );
};

export default Login;
