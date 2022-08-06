import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { Link } from "react-router-dom";
import KenzieHubLogo from "../../assets/img/KenzieHubLogo.svg";

import styled from "./Register.module.css";

const Register = ({ loginPage }) => {
  return (
    <div className={styled.registerPage}>
      <div className={styled.registerHeader}>
        <div className={styled.logoBox}>
          <img src={KenzieHubLogo} alt="Kenzie Hub Logo" />
        </div>
        <Link to="/login">
          <button className={styled.goToLoginButton}>Back</button>
        </Link>
      </div>
      <section className={styled.registerSection}>
        <div className={styled.registerFormBox}>
          <RegisterForm />
        </div>
      </section>
    </div>
  );
};

export default Register;
