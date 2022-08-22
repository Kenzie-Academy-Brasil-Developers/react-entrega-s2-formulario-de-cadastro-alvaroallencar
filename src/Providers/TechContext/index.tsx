import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

import kenzieHubApi from "../../services/kenzieHubApi";
import { useUserContext } from "../UserContext";

// Creating interfaces --------------------------------------------------------------

interface TechProviderProps {
  children: ReactNode;
}

export interface EditTechForm {
  status: string;
}

export interface NewTechForm extends EditTechForm {
  title: string;
}

interface TechProviderData {
  add: boolean;
  details: boolean;
  techId: string | number;
  setTechId: (techId: string | number) => void;
  techTitleInput: string;
  setTechTitleInput: (title: string) => void;
  techStatusSelect: string;
  setTechStatusSelect: (status: string) => void;
  showAddTechModal: () => void;
  showDetailsTechModal: () => void;
  onSubmitNewTech: (formData: NewTechForm) => void;
  onSubmitEdit: (formData: EditTechForm) => void;
  deleteTech: () => void;
}

// Creating and using TechContext --------------------------------------------------

const TechContext = createContext<TechProviderData>({} as TechProviderData);

export const useTechContext = () => {
  const context = useContext(TechContext);

  return context;
};

// Creating TechProvider -----------------------------------------------------------

export const TechProvider = ({ children }: TechProviderProps) => {
  const [add, setAdd] = useState<boolean>(false);
  const [details, setDetails] = useState<boolean>(false);
  const [techId, setTechId] = useState<string | number>("");
  const [techTitleInput, setTechTitleInput] = useState<string>("");
  const [techStatusSelect, setTechStatusSelect] = useState<string>("");

  const { user, setUser } = useUserContext();

  const showAddTechModal = (): void => {
    setAdd(!add);
  };

  const showDetailsTechModal = (): void => {
    setDetails(!details);
    setTechId("");
    setTechTitleInput("");
    setTechStatusSelect("");
  };

  const onSubmitNewTech = (formData: NewTechForm): void => {
    kenzieHubApi
      .post("/users/techs", formData)
      .then((res) => {
        if (res.data) {
          const { id } = res.data.user;

          toast.success("Technology added succesfully!");

          kenzieHubApi
            .get(`/users/${id}`)
            .then((res) => {
              setUser(res.data);

              showAddTechModal();
            })
            .catch((err: AxiosError) => console.log(err));
        }
      })
      .catch((err: AxiosError) => {
        console.log(err);

        const { message } = err;

        if (
          message ===
          "User Already have this technology created you can only update it"
        ) {
          toast.warn(
            "This technology has been added before. You may only edit it."
          );
        }
      });
  };

  const onSubmitEdit = (formData: EditTechForm): void => {
    kenzieHubApi
      .put(`/users/techs/${techId}`, formData)
      .then((res) => {
        console.log(res);
        if (res.data) {
          toast.success("Technology edited succesfully!");

          kenzieHubApi
            .get(`/users/${user.id}`)
            .then((res) => {
              setUser(res.data);

              showDetailsTechModal();
            })
            .catch((err: AxiosError) => console.log(err));
        }
      })
      .catch((err: AxiosError) => console.log(err));
  };

  const deleteTech = (): void => {
    kenzieHubApi
      .delete(`/users/techs/${techId}`)
      .then((res) => {
        console.log(res);
        if (res.data === "") {
          toast.info("Technology deleted succesfully!");

          kenzieHubApi
            .get(`/users/${user.id}`)
            .then((res) => {
              setUser(res.data);

              showDetailsTechModal();
            })
            .catch((err: AxiosError) => console.log(err));
        }
      })
      .catch((err: AxiosError) => console.log(err));
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
