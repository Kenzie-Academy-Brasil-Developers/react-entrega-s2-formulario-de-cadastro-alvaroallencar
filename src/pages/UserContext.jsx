/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import apiRequests from "../services/apiRequests";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [userLoggedIn, setUserLoggedIn] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const tokenInLocalStorage = JSON.parse(
      localStorage.getItem("@KenzieHub:token")
    );

    if (tokenInLocalStorage) {
      apiRequests.defaults.headers.authorization = `Bearer ${tokenInLocalStorage}`;

      apiRequests
        .get("/profile")
        .then((res) => {
          console.log(res.data);
          if (res.data) {
            setUserLoggedIn(res.data);
            // toast.info("You are already logged in!", {
            //   theme: "dark",
            //   position: "bottom-right",
            //   autoClose: 3000,
            //   hideProgressBar: true,
            //   closeOnClick: true,
            //   pauseOnHover: true,
            //   draggable: true,
            //   progress: undefined,
            // });
            navigate("/home", { replace: true });
          }
        })
        .catch((err) => console.log(err));
    }
    setLoading(false);
  }, []);

  const onSubmitLoginFunction = (formData) => {
    console.log(formData);

    apiRequests
      .post("/sessions", formData)
      .then((res) => {
        if (res.data.token) {
          const { user: userResponse, token } = res.data;

          setUserLoggedIn(userResponse);
          apiRequests.defaults.headers.authorization = `Bearer ${token}`;

          toast.success(`Welcome ${userResponse.name}!`, {
            theme: "dark",
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          console.log(res.data);

          localStorage.setItem("@KenzieHub:user", JSON.stringify(userResponse));

          localStorage.setItem("@KenzieHub:token", JSON.stringify(token));

          navigate("/home", { replace: true });
        }
      })
      .catch((err) => {
        console.log(err.response.data.message);
        toast.warn(`${err.response.data.message}!`, {
          theme: "dark",
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const onSubmitRegisterFunction = (formData) => {
    console.log(formData);
    apiRequests
      .post("/users", formData)
      .then((res) => {
        if (res.data.id) {
          toast.success(
            `User ${res.data.name} created succesfully! Please login!`,
            {
              theme: "dark",
              position: "bottom-right",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
          console.log(res.data);
          navigate("/login", { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.warn(`${err.response.data.message}!`, {
          theme: "dark",
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        userLoggedIn,
        setUserLoggedIn,
        onSubmitLoginFunction,
        onSubmitRegisterFunction,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
