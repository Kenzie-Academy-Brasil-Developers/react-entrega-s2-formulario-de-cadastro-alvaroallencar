import { useContext } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { motion } from "framer-motion";
import { UserContext } from "../../contexts/UserContext";
import { TechContext } from "../../contexts/TechContext";
import TechsList from "../../components/TechsList/TechsList";
import AddTechModal from "../../components/AddTechModal/AddTechModal";

import {
  HomePageWrapper,
  Header,
  HeaderContainer,
  SectionContainer,
  WelcomeMessageDiv,
  UserModuleDiv,
  TechsHeader,
} from "./home.styles";

import KenzieHubLogo from "../../assets/img/KenzieHubLogo.svg";

const Home = () => {
  const { user, handleSignOut } = useContext(UserContext);
  const { add, showAddTechModal } = useContext(TechContext);

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

      <TechsHeader>
        <p>Technologies</p>
        <button onClick={showAddTechModal}>
          <IoMdAddCircle />
        </button>
      </TechsHeader>

      {user.techs.length > 0 ? (
        <TechsList />
      ) : (
        <p style={{ color: "white" }}>Nothing here</p>
      )}

      {add && <AddTechModal />}
    </HomePageWrapper>
  );
};

export default Home;
