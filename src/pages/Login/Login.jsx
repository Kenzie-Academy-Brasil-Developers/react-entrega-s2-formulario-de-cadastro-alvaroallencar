import LoginForm from "../../components/LoginForm/LoginForm";
import { Link } from "react-router-dom";

import KenzieHubLogo from "../../assets/img/KenzieHubLogo.svg";

import styled from "./Login.module.css";

const Login = () => {
  return (
    <div className={styled.loginPage}>
      <div className={styled.logoBox}>
        <img src={KenzieHubLogo} alt="Kenzie Hub Logo" />
      </div>
      <section className={styled.loginSection}>
        <div className={styled.loginFormBox}>
          <LoginForm />
        </div>
        <div className={styled.registerButtonBox}>
          <p>Don't have an account yet?</p>
          <Link to="/register" className={styled.goToRegisterLink}>
            <button>Register</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Login;
