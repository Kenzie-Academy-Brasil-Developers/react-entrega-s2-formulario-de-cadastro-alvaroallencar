import { Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Home from "../../pages/Home";
import ProtectedRoutes from "../../components/ProtectedRoutes";

const RoutesMain = (): JSX.Element => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
    </AnimatePresence>
  );
};

export default RoutesMain;
