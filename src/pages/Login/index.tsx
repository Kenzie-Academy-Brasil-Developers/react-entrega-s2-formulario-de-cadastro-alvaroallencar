/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { VscLoading } from "react-icons/vsc";
import { motion } from "framer-motion";
import { AxiosError } from "axios";

import LoginForm from "../../components/LoginForm";
import kenzieHubApi from "../../services/kenzieHubApi";
import { useUserContext, UserResponse } from "../../Providers/UserContext";

import { LoginPageWrapper, LoginSection, LoadingMessage } from "./styles";

const KenzieHubLogo: string =
  require("../../assets/img/KenzieHubLogo.svg").default;

const Login = () => {
  const navigate = useNavigate();
  const { setUser, loading } = useUserContext();

  useEffect((): void => {
    async function getUser(): Promise<void> {
      const tokenInStorage: string | null =
        localStorage.getItem("@KenzieHub:token");

      if (tokenInStorage && typeof tokenInStorage === "string") {
        const token: string = JSON.parse(tokenInStorage);

        kenzieHubApi.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${token}`;

        await kenzieHubApi
          .get<UserResponse>("/profile")
          .then(({ data }) => {
            setUser(data);

            toast.info("You are already logged in!");

            // const toNavigate = location.state?.from?.pathname || "/home";

            navigate("/home", { replace: true });
          })
          .catch((err: AxiosError) => console.log(err));
      }
    }

    getUser();
  }, []);

  const handleGoToRegister = (): void => {
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
