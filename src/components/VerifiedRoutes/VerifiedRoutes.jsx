// import { useContext } from "react";
// import { Navigate, Outlet } from "react-router-dom";
// import { UserContext } from "../../pages/UserContext";

// const VerifiedRoutes = () => {
//   const { userLoggedIn, loading } = useContext(UserContext);
//   // const location = useLocation();

//   if (loading) {
//     return <h1 style={{ color: "white" }}>Loading...</h1>;
//   }

//   return userLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
// };

// export default VerifiedRoutes;
