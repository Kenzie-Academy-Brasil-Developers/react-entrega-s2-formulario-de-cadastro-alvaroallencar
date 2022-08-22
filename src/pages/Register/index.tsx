/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { VscLoading } from "react-icons/vsc";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

import RegisterForm from "../../components/RegisterForm";
import kenzieHubApi from "../../services/kenzieHubApi";
import { useUserContext, UserResponse } from "../../Providers/UserContext";

import {
  RegisterPageWrapper,
  RegisterHeader,
  RegisterSection,
  LoadingMessage,
} from "./styles";

const KenzieHubLogo: string =
  require("../../assets/img/KenzieHubLogo.svg").default;

const Register = () => {
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

            toast.info("You must log out to create a new user.");

            // const toNavigate = location.state?.from?.pathname || "/home";

            navigate("/home", { replace: true });
          })
          .catch((err) => console.log(err));
      }
    }

    getUser();
  }, []);

  const handleBackToLogin = (): void => {
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
