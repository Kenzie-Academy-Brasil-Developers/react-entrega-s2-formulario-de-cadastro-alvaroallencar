import { Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";

const RoutesMain = () => {
  // const [goToRegister, setGoToRegister] = useState(false);
  // const [isRegistered, setIsRegistered] = useState(false);
  // const [goToLogin, setGoToLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [ishomePage, setHomePage] = useState(false);
  return (
    <AnimatePresence>
      <Routes>
        <Route
          path="/login"
          element={
            <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route
          path="/register"
          element={
            <Register isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route
          path="/home"
          element={
            <Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
    </AnimatePresence>
  );
};

export default RoutesMain;
