import LoginForm from "../../components/LoginForm/LoginForm";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import KenzieHubLogo from "../../assets/img/KenzieHubLogo.svg";
import styled from "./Login.module.css";
import { useEffect } from "react";

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));
    if (token) {
      navigate("/home", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className={styled.loginPage}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styled.logoBox}>
        <img src={KenzieHubLogo} alt="Kenzie Hub Logo" />
      </div>
      <section className={styled.loginSection}>
        <div className={styled.loginFormBox}>
          <LoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </div>
        <div className={styled.registerButtonBox}>
          <p>Don't have an account yet?</p>
          <Link to="/register" className={styled.goToRegisterLink}>
            <button>Register</button>
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default Login;
