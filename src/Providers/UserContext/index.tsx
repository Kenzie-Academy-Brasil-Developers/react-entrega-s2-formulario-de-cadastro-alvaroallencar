import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

import kenzieHubApi from "../../services/kenzieHubApi";

// Creating interfaces -----------------------------------------------------------

interface UserProviderProps {
  children: ReactNode;
}

export interface User {
  id: string | number;
  name: string;
  email: string;
  course_module: string;
  bio: string | null;
  contact: string | number;
  created_at: string;
  updated_at: string;
  avatar_url: string | null;
  techs: Tech[];
  works: string[];
}

export interface Tech {
  id: string;
  created_at: string;
  status: string;
  title: string;
  updated_at: string;
}

export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterForm {
  bio: string;
  password: string;
  confirmPassword: string;
  contact: string;
  course_module: string;
  email: string;
  name: string;
}

interface UserProviderData {
  user: User;
  setUser: (user: User) => void;
  loading: boolean;
  onSubmitLogin: (loginFormData: LoginForm) => void;
  onSubmitRegister: (registerFormData: RegisterForm) => void;
  handleSignOut: () => void;
}

export interface UserResponse extends User {}

interface LoginData {
  token: string | number;
  user: User;
}

// Creating and using UserContext ------------------------------------------------

const UserContext = createContext<UserProviderData>({} as UserProviderData);

export const useUserContext = (): UserProviderData => {
  const context = useContext(UserContext);

  return context;
};

// Creating UserProvider ---------------------------------------------------------

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect((): void => {
    async function getUser(): Promise<void> {
      const tokenInStorage: string | null =
        localStorage.getItem("@KenzieHub:token");

      if (tokenInStorage && typeof tokenInStorage === "string") {
        const token = JSON.parse(tokenInStorage);

        kenzieHubApi.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${token}`;

        await kenzieHubApi
          .get<UserResponse>("/profile")
          .then(({ data }) => {
            console.log(data);

            setUser(data);
          })
          .catch((err: AxiosError) => console.log(err));
      }
      setLoading(false);
    }

    getUser();
  }, []);

  const onSubmitLogin = (loginFormData: LoginForm): void => {
    kenzieHubApi
      .post<LoginData>("/sessions", loginFormData)
      .then(({ data }) => {
        if (data) {
          const { user: userResponse, token } = data;

          kenzieHubApi.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${token}`;

          setUser(userResponse);

          toast.success(`Welcome ${userResponse.name}!`);

          localStorage.setItem("@KenzieHub:token", JSON.stringify(token));

          // const toNavigate = location.state?.from?.pathname || "/home";

          // const toNavigate = "/home";

          navigate("/home", { replace: true });
        }
      })
      .catch((err: AxiosError) => {
        const { message } = err;
        console.log(message);

        toast.warn(`${message}!`);
      });
  };

  const onSubmitRegister = (registerFormData: RegisterForm): void => {
    kenzieHubApi
      .post("/users", registerFormData)
      .then((res) => {
        if (res.data.id) {
          const { data } = res;
          console.log(data);

          toast.success(`User ${data.name} created succesfully! Please login!`);

          navigate("/login", { replace: true });
        }
      })
      .catch((err : AxiosError) => {
        const { message } = err;

        console.log(message);

        toast.warn(`${message}!`);
      });
  };

  const handleSignOut = (): void => {
    localStorage.clear();

    toast.info(`See you soon, ${user.name}!`);

    navigate("/login", { replace: true });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loading,
        onSubmitLogin,
        onSubmitRegister,
        handleSignOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
