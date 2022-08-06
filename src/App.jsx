import Routes from "./routes/RoutesMain";
import { useState } from "react";

import GlobalStyle from "./styles/globalStyle";
// import styled from "./App.module.css";

function App() {
  const [goToRegister, setGoToRegister] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [goToLogin, setGoToLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [ishomePage, setHomePage] = useState(false);

  const registerPage = (bool) => setGoToRegister(bool);

  const loginPage = (bool) => setGoToRegister(bool);

  const homePage = (bool) => setHomePage(bool);

  const logout = () => {
    localStorage.clear();
    homePage(false);
  };

  return (
    <>
      <GlobalStyle />
      <Routes
        loginPage={loginPage}
        registerPage={registerPage}
        homePage={homePage}
        logout={logout}
      />
    </>
  );
}

export default App;
