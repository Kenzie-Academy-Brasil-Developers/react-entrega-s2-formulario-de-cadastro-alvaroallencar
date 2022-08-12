/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import apiRequests from "../../services/apiRequests";
import { UserContext } from "../../contexts/UserContext";
import { VscLoading } from "react-icons/vsc";
import {
  RegisterPageWrapper,
  RegisterHeader,
  RegisterSection,
  LoadingMessage,
} from "./register.styles";

import KenzieHubLogo from "../../assets/img/KenzieHubLogo.svg";

const Register = () => {
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

            toast.info("You must log out to create a new user.", {
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

  const handleBackToLogin = () => {
    navigate("/login", { replace: true });
  };

  return loading === false ? (
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
  ) : (
    <LoadingMessage>
      <VscLoading />
    </LoadingMessage>
  );
};

export default Register;
