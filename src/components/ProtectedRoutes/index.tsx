import { Navigate, Outlet, useLocation } from "react-router-dom";
import { VscLoading } from "react-icons/vsc";

import { useUserContext } from "../../Providers/UserContext";

import { LoadingMessage } from "./styles";

const ProtectedRoutes = () => {
  const { user, loading } = useUserContext();
  const location = useLocation();

  return loading === true ? (
    <LoadingMessage>
      <VscLoading />
    </LoadingMessage>
  ) : user && Object.keys(user).length > 0 ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default ProtectedRoutes;
