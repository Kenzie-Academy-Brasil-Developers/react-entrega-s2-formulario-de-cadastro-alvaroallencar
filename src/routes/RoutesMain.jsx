import { Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import ProtectedRoutes from "../components/ProtectedRoutes/ProtectedRoutes";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";

const RoutesMain = () => {
   return (
      <AnimatePresence>
         <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate replace to="/login" />} />
            <Route element={<ProtectedRoutes />}>
               <Route path="/home" element={<Home />} />
            </Route>
         </Routes>
      </AnimatePresence>
   );
};

export default RoutesMain;
