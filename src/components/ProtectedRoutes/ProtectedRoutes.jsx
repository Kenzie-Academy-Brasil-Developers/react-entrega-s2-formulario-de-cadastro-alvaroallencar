import { UserContext } from "../../contexts/UserContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useContext } from "react";

const ProtectedRoutes = () => {
   const { user, loading } = useContext(UserContext);
   const location = useLocation();

   if (loading) {
      return <div style={{ color: "white" }}>Loading...</div>;
   }

   return user ? (
      <Outlet />
   ) : (
      <Navigate to="/login" replace state={{ from: location }} />
   );
};

export default ProtectedRoutes;
