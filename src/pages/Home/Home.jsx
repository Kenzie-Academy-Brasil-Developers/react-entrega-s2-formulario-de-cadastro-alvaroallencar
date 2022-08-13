/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosConstruct } from "react-icons/io";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { UserContext } from "../../contexts/UserContext";

import {
  HomePageWrapper,
  Header,
  HeaderContainer,
  SectionContainer,
  WelcomeMessageDiv,
  UserModuleDiv,
  UserTechInfoMain,
} from "./home.styles";

import KenzieHubLogo from "../../assets/img/KenzieHubLogo.svg";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const handleSignOut = () => {
    localStorage.clear();
    toast.info(`See you soon, ${user.name}!`, {
      theme: "dark",
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    navigate("/login", { replace: true });
  };

  return (
    <HomePageWrapper
      as={motion.div}
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 30, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header>
        <HeaderContainer>
          <div>
            <img src={KenzieHubLogo} alt="Kenzie Hub Logo" />
          </div>
          <div>
            <button onClick={handleSignOut}>Logout</button>
          </div>
        </HeaderContainer>
      </Header>
      <SectionContainer>
        <section>
          <WelcomeMessageDiv>
            <p>Hi, {user.name}!</p>
          </WelcomeMessageDiv>
          <UserModuleDiv>
            <p>{user.course_module}</p>
          </UserModuleDiv>
        </section>
      </SectionContainer>
      <UserTechInfoMain>
        <p>Sorry, but this page is not complete yet :(</p>
        <motion.p
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            repeat: Infinity,
            duration: 0.5,
            repeatType: "reverse",
          }}
        >
          <IoIosConstruct />
        </motion.p>
      </UserTechInfoMain>
    </HomePageWrapper>
  );
};

export default Home;
