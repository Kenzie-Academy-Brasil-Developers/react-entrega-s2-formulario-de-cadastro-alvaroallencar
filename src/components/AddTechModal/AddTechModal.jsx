import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoMdCloseCircle } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";

import { TechContext } from "../../contexts/TechContext";

import {
  AddTechModalWrapper,
  InnerAddTechModal,
  ModalHeader,
  ModalForm,
  TechTitleDiv,
  TechStatusDiv,
  ButtonBoxDiv,
} from "./addTechModal.styles";

const AddTechModal = () => {
  const { showAddTechModal, onSubmitNewTech } = useContext(TechContext);

  const formSchema = yup.object().shape({
    title: yup.string().trim().required("Title required"),
    status: yup.string().required("Technology status required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  return (
    <AnimatePresence>
      <AddTechModalWrapper
        as={motion.div}
        key="InnerAddTechModal"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <InnerAddTechModal>
          <ModalHeader>
            <h2>New Technology</h2>
            <button onClick={showAddTechModal}>
              <IoMdCloseCircle />
            </button>
          </ModalHeader>
          <ModalForm onSubmit={handleSubmit(onSubmitNewTech)}>
            <TechTitleDiv>
              <label htmlFor="technologyTitle">Title</label>
              <input
                type="text"
                placeholder="Your technology here"
                id="technologyTitle"
                {...register("title")}
              />
              {errors.title?.message ? (
                <p>{errors.title?.message}</p>
              ) : (
                <p>
                  <br />
                </p>
              )}
            </TechTitleDiv>
            <TechStatusDiv>
              <label htmlFor="technologyStatus">Status</label>
              <select id="technologyStatus" {...register("status")}>
                <option value="Iniciante">Beginner</option>
                <option value="Intermediário">Intermediary</option>
                <option value="Avançado">Advanced</option>
              </select>
              {errors.status?.message ? (
                <p>{errors.status?.message}</p>
              ) : (
                <p>
                  <br />
                </p>
              )}
            </TechStatusDiv>
            <ButtonBoxDiv>
              <button type="submit">Add Technology</button>
            </ButtonBoxDiv>
          </ModalForm>
        </InnerAddTechModal>
      </AddTechModalWrapper>
    </AnimatePresence>
  );
};

export default AddTechModal;
