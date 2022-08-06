import { useNavigate } from "react-router-dom";
import KenzieHubLogo from "../../assets/img/KenzieHubLogo.svg";
import { IoIosConstruct } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import styled from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);

  useEffect(() => {
    const tokenInLocalStorage = JSON.parse(
      localStorage.getItem("@KenzieHub:token")
    );
    const userInLocalStorage = JSON.parse(
      localStorage.getItem("@KenzieHub:user")
    );

    if (tokenInLocalStorage && userInLocalStorage) {
      setUser(userInLocalStorage);
    } else {
      navigate("/login", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignOut = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  return (
    <AnimatePresence>
      <motion.div
        className={styled.homePage}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <header className={styled.header}>
          <div className={styled.headerContainer}>
            <div className={styled.imageBox}>
              <img src={KenzieHubLogo} alt="Kenzie Hub Logo" />
            </div>
            <div className={styled.logoutDiv}>
              <button
                onClick={handleSignOut}
                className={styled.goToLoginButton}
              >
                Logout
              </button>
            </div>
          </div>
        </header>
        <div className={styled.sectionContainer}>
          <section className={styled.devInfosSection}>
            <div className={styled.welcomeMessageDiv}>
              <p>Hi, {user.name}!</p>
            </div>
            <div className={styled.userModuleDiv}>
              <p>{user.course_module}</p>
            </div>
          </section>
        </div>
        <main className={styled.userTechInfoMain}>
          <p>Sorry, but this page is not complete yet :(</p>
          <motion.p
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ yoyo: Infinity, duration: 0.5 }}
          >
            <IoIosConstruct />
          </motion.p>
        </main>
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
