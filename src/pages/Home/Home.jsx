import { Link } from "react-router-dom";
import KenzieHubLogo from "../../assets/img/KenzieHubLogo.svg";
import { IoMdConstruct } from "react-icons/io";

import styled from "./Home.module.css";

const Home = () => {
  return (
    <div className={styled.homePage}>
      <header className={styled.header}>
        <div className={styled.headerContainer}>
          <div className={styled.imageBox}>
            <img src={KenzieHubLogo} alt="Kenzie Hub Logo" />
          </div>
          <div className={styled.logoutDiv}>
            <Link to="/login">
              <button className={styled.goToLoginButton}>Logout</button>
            </Link>
          </div>
        </div>
      </header>
      <div className={styled.sectionContainer}>
        <section className={styled.devInfosSection}>
          <div className={styled.welcomeMessageDiv}>
            <p>Hi, dear user!</p>
          </div>
          <div className={styled.userModuleDiv}>
            <p>Dev's current module</p>
          </div>
        </section>
      </div>
      <main className={styled.userTechInfoMain}>
        <p>
          What a pity! Work in progress here <IoMdConstruct />
        </p>
      </main>
    </div>
  );
};

export default Home;
