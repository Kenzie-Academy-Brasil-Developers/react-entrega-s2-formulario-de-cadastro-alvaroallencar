import { createContext, useContext, useState } from "react";
import apiRequests from "../services/apiRequests";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";

export const TechContext = createContext({ UserContext });

const TechProvider = ({ children }) => {
  const [add, setAdd] = useState(false);
  const [details, setDetails] = useState(false);
  const [techId, setTechId] = useState("");
  const [techTitleInput, setTechTitleInput] = useState("");
  const [techStatusSelect, setTechStatusSelect] = useState("");

  const { user, setUser } = useContext(UserContext);

  const showAddTechModal = () => {
    setAdd(!add);
  };

  const showDetailsTechModal = () => {
    setDetails(!details);
    setTechId("");
    setTechTitleInput("");
    setTechStatusSelect("");
  };

  const onSubmitNewTech = (formData) => {
    apiRequests
      .post("/users/techs", formData)
      .then((res) => {
        if (res.data) {
          const { id } = res.data.user;

          toast.success("Technology added succesfully!", {
            theme: "dark",
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          apiRequests
            .get(`/users/${id}`)
            .then((res) => {
              setUser(res.data);

              showAddTechModal();
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => {
        console.log(err);
        if (
          err.response.data.message ===
          "User Already have this technology created you can only update it"
        ) {
          toast.warn(
            "This technology has been added before. You may only edit it.",
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
        }
      });
  };

  const onSubmitEdit = (formData) => {
    apiRequests
      .put(`/users/techs/${techId}`, formData)
      .then((res) => {
        console.log(res);
        if (res.data) {
          toast.success("Technology edited succesfully!", {
            theme: "dark",
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          apiRequests
            .get(`/users/${user.id}`)
            .then((res) => {
              setUser(res.data);

              showDetailsTechModal();
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => {
        console.log(err);
        toast.warn(`${err.response.data.message}`, {
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

  const deleteTech = () => {
    apiRequests
      .delete(`/users/techs/${techId}`)
      .then((res) => {
        console.log(res);
        if (res.data === "") {
          toast.info("Technology deleted succesfully!", {
            theme: "dark",
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          apiRequests
            .get(`/users/${user.id}`)
            .then((res) => {
              setUser(res.data);

              showDetailsTechModal();
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => {
        console.log(err);
        toast.warn(`${err.response.data.message}`, {
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
    <TechContext.Provider
      value={{
        add,
        details,
        techId,
        setTechId,
        techTitleInput,
        setTechTitleInput,
        techStatusSelect,
        setTechStatusSelect,
        showAddTechModal,
        showDetailsTechModal,
        onSubmitNewTech,
        onSubmitEdit,
        deleteTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
