import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { useNavigate } from "react-router-dom";
import KenzieHubLogo from "../../assets/img/KenzieHubLogo.svg";
import { motion } from "framer-motion";
import { useEffect } from "react";

import styled from "./Register.module.css";

const Register = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));
    if (token) {
      navigate("/home", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBackToLogin = () => {
    navigate("/login", { replace: true });
  };

  return (
    <motion.div
      className={styled.registerPage}
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styled.registerHeader}>
        <div className={styled.logoBox}>
          <img src={KenzieHubLogo} alt="Kenzie Hub Logo" />
        </div>
        <button className={styled.goToLoginButton} onClick={handleBackToLogin}>
          Back
        </button>
      </div>
      <section className={styled.registerSection}>
        <div className={styled.registerFormBox}>
          <RegisterForm />
        </div>
      </section>
    </motion.div>
  );
};

export default Register;
