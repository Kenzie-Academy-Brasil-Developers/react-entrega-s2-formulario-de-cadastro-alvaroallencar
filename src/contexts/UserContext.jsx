import { createContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import apiRequests from "../services/apiRequests";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);
   const navigate = useNavigate();
   const location = useLocation();

   useEffect(() => {
      async function getUser() {
         const token = localStorage.getItem("@KenzieHub:token");
         if (token) {
            try {
               apiRequests.defaults.headers.authorization = `Bearer ${token}`;

               const { data } = await apiRequests.get("/profile");
               setUser(data);
            } catch (err) {
               console.error(err);
            }
         }
         setLoading(false);
      }
      getUser();
   }, []);

   const onSubmitLoginFunction = async (formData) => {
      console.log(formData);

      const response = await apiRequests.post("/sessions", formData);

      const { user: userReturned, token } = response.data;

      console.log({ userReturned, token });

      setUser(userReturned);

      apiRequests.defaults.headers.authorization = `Bearer ${token}`;

      localStorage.setItem("@KenzieHub:user", JSON.stringify(userReturned));

      localStorage.setItem("@KenzieHub:token", JSON.stringify(token));

      toast.success(`Welcome ${userReturned.name}!`, {
         theme: "dark",
         position: "bottom-right",
         autoClose: 3000,
         hideProgressBar: true,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
      });

      const navigateTo = location.state?.from?.pathname || "/home";

      navigate(navigateTo, { replace: true });
   };

   // const onSubmitRegisterFunction = (formData) => {
   //    console.log(formData);
   //    apiRequests
   //       .post("/users", formData)
   //       .then((res) => {
   //          if (res.data.id) {
   //             toast.success(
   //                `User ${res.data.name} created succesfully! Please login!`,
   //                {
   //                   theme: "dark",
   //                   position: "bottom-right",
   //                   autoClose: 3000,
   //                   hideProgressBar: true,
   //                   closeOnClick: true,
   //                   pauseOnHover: true,
   //                   draggable: true,
   //                   progress: undefined,
   //                }
   //             );
   //             console.log(res.data);
   //             navigate("/login", { replace: true });
   //          }
   //       })
   //       .catch((err) => {
   //          console.log(err);
   //          toast.success(
   //             `User ${err.data.name} created succesfully! Please login!`,
   //             {
   //                theme: "dark",
   //                position: "bottom-right",
   //                autoClose: 3000,
   //                hideProgressBar: true,
   //                closeOnClick: true,
   //                pauseOnHover: true,
   //                draggable: true,
   //                progress: undefined,
   //             }
   //          );
   //       });
   // };

   const handleSignOut = () => {
      localStorage.clear();
      toast.info(`See you soon, ${user.name}!`, {
         theme: "dark",
         position: "bottom-right",
         autoClose: 3000,
         hideProgressBar: true,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
      });
      navigate("/login", { replace: true });
   };

   return (
      <UserContext.Provider
         value={{
            user,
            onSubmitLoginFunction,
            // onSubmitRegisterFunction,
            loading,
            handleSignOut,
         }}
      >
         {children}
      </UserContext.Provider>
   );
};

export default UserProvider;
