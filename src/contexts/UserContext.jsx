import { createContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
      const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

      if (token) {
        apiRequests.defaults.headers.authorization = `Bearer ${token}`;

        await apiRequests
          .get("/profile")
          .then((res) => {
            const { data } = res;
            setUser(data);
          })
          .catch((err) => console.log(err));
      }
      setLoading(false);
    }

    getUser();
  }, []);

  const onSubmitLogin = (formData) => {
    apiRequests
      .post("/sessions", formData)
      .then((res) => {
        if (res.data.user) {
          const { user: userResponse, token } = res.data;

          apiRequests.defaults.headers.authorization = `Bearer ${token}`;

          setUser(userResponse);

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

          localStorage.setItem("@KenzieHub:user", JSON.stringify(userResponse));
          localStorage.setItem("@KenzieHub:token", JSON.stringify(token));

          const toNavigate = location.state?.from?.pathname || "/home";

          navigate(toNavigate, { replace: true });
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

  const onSubmitRegister = (formData) => {
    apiRequests
      .post("/users", formData)
      .then((res) => {
        if (res.data.id) {
          const { data } = res;
          toast.success(
            `User ${data.name} created succesfully! Please login!`,
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
          console.log(data);
          navigate("/login", { replace: true });
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

  return (
    <UserContext.Provider
      value={{ user, setUser, loading, onSubmitLogin, onSubmitRegister }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
