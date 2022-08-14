import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";
import { TechContext } from "../../contexts/TechContext";

import {
  DetailsTechModalWrapper,
  InnerDetailsTechModal,
  ModalHeader,
  ModalForm,
  TechTitleDiv,
  TechStatusDiv,
  ButtonBoxDiv,
} from "./detailsTechModal.styles";

const DetailsTechModal = () => {
  const {
    techId,
    setTechId,
    techTitleInput,
    setTechTitleInput,
    techStatusSelect,
    setTechStatusSelect,
    showDetailsTechModal,
    onSubmitEdit,
    deleteTech,
  } = useContext(TechContext);

  const formSchema = yup.object().shape({
    status: yup.string().required("Technology status required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  return (
    <DetailsTechModalWrapper
      as={motion.div}
      key="InnerDetailsTechModal"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <InnerDetailsTechModal>
        <ModalHeader>
          <h2>Technology Details</h2>
          <button onClick={showDetailsTechModal}>
            <IoMdCloseCircle />
          </button>
        </ModalHeader>
        <ModalForm onSubmit={handleSubmit(onSubmitEdit)}>
          <TechTitleDiv>
            <label>Title</label>
            <p>Cannot be changed</p>
            <input
              type="text"
              disabled
              value={techTitleInput}
              placeholder="Your technology here"
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
            <select
              id="technologyStatus"
              defaultValue={techStatusSelect}
              onChange={(e) => setTechStatusSelect(e.target.value)}
              {...register("status")}
            >
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
            <button type="submit">Edit</button>
            <button type="button" onClick={deleteTech}>
              Delete
            </button>
          </ButtonBoxDiv>
        </ModalForm>
      </InnerDetailsTechModal>
    </DetailsTechModalWrapper>
  );
};

export default DetailsTechModal;
