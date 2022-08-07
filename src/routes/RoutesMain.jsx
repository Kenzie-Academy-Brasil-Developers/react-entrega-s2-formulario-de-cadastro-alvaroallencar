import { Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";

const RoutesMain = () => {
   return (
      <AnimatePresence>
         <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Navigate replace to="/login" />} />
         </Routes>
      </AnimatePresence>
   );
};

export default RoutesMain;
