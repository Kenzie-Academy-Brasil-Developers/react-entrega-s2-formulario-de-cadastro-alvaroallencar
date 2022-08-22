import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";

import {
  useTechContext,
  EditTechForm as IEditTechForm,
} from "../../Providers/TechContext";

import {
  DetailsTechModalWrapper,
  InnerDetailsTechModal,
  ModalHeader,
  ModalForm,
  TechTitleDiv,
  TechStatusDiv,
  ButtonBoxDiv,
} from "./styles";

const DetailsTechModal = (): JSX.Element => {
  const {
    techTitleInput,
    techStatusSelect,
    setTechStatusSelect,
    showDetailsTechModal,
    onSubmitEdit,
    deleteTech,
  } = useTechContext();

  const formSchema = yup.object().shape({
    status: yup.string().required("Technology status required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditTechForm>({ resolver: yupResolver(formSchema) });

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
          </TechTitleDiv>
          <TechStatusDiv>
            <label htmlFor="technologyStatus">Status</label>
            <select
              id="technologyStatus"
              defaultValue={techStatusSelect}
              {...register("status")}
              onChange={(e) => setTechStatusSelect(e.target.value)}
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
