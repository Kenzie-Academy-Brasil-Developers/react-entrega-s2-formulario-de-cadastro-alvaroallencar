import { Navigate, Outlet, useLocation } from "react-router-dom";
import { VscLoading } from "react-icons/vsc";

import { useUserContext } from "../../Providers/UserContext";

import { LoadingMessage } from "./styles";

const ProtectedRoutes = () => {
  const { user, loading } = useUserContext();
  const location = useLocation();

  if (loading) {
    return (
      <LoadingMessage>
        <VscLoading />
      </LoadingMessage>
    );
  }

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default ProtectedRoutes;
