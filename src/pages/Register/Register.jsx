/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import {
  RegisterPageWrapper,
  RegisterHeader,
  RegisterSection,
} from "./register.styles";
import apiRequests from "../../services/apiRequests";

import KenzieHubLogo from "../../assets/img/KenzieHubLogo.svg";

const Register = () => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const tokenInLocalStorage = JSON.parse(
      localStorage.getItem("@KenzieHub:token")
    );

    if (tokenInLocalStorage) {
      apiRequests.defaults.headers.authorization = `Bearer ${tokenInLocalStorage}`;

      apiRequests
        .get("/profile")
        .then((res) => {
          console.log(res.data);
          if (res.data) {
            setUser(res.data);
            toast.info("You must log out to create a new user!", {
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
          } else {
            navigate("/register", { replace: true });
          }
        })
        .catch((err) => console.log(err));
    }
    setLoading(false);
  }, []);

  const handleBackToLogin = () => {
    navigate("/login", { replace: true });
  };

  return (
    <>
      {loading ? (
        <h1 style={{ color: "white" }}>Loading...</h1>
      ) : (
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
      )}
    </>
  );
};

export default Register;
