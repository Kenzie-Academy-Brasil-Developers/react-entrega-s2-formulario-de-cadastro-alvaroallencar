import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";

const RoutesMain = ({ loginPage, registerPage, homePage, logout }) => {
  return (
    <Routes>
      <Route
        path="/login"
        element={<Login registerPage={registerPage} homePage={homePage} />}
      />
      <Route path="/register" element={<Register loginPage={loginPage} />} />
      <Route path="/home" element={<Home logout={logout} />} />
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
};

export default RoutesMain;
