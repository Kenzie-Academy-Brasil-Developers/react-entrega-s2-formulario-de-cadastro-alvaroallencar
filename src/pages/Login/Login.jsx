/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import { toast } from "react-toastify";

import apiRequests from "../../services/apiRequests";
import { UserContext } from "../UserContext";

import { LoginPageWrapper, LoginSection } from "./login.styles";
import KenzieHubLogo from "../../assets/img/KenzieHubLogo.svg";

const Login = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState([]);
//   const { loading, setLoading } = useContext(UserContext);
    const [loading, setLoading] = useState(true);

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
          } else {
            navigate("/login", { replace: true });
          }
        })
        .catch((err) => console.log(err));
    }
    setLoading(false);
  }, []);

  const handleGoToRegister = () => {
    navigate("/register", { replace: true });
  };

//   if (loading) {
//     return <h1 style={{ color: "white" }}>Loading...</h1>;
//   }

  return (
    <>
      {loading ? (
        <h1 style={{ color: "white" }}>Loading...</h1>
      ) : (
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
      )}
    </>
  );
};

export default Login;
