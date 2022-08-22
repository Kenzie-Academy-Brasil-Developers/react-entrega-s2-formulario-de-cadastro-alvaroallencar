import styled from "styled-components";

export const DetailsTechModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  color: rgba(var(--color-white), 1);
  background-color: rgba(var(--color-grey-4), 0.7);

`;

export const InnerDetailsTechModal = styled.div`
  width: 400px;
  max-width: 95vw;
  height: 400px;

  background-color: rgba(var(--color-grey-2), 1);
  border-radius: 4px;
`;

export const ModalHeader = styled.header`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px;
  border-radius: 4px;

  background-color: rgba(var(--color-grey-2), 1);

  & > h2 {
    font-weight: 700;
    font-size: 14px;
  }

  & > button {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.5rem;
    background-color: transparent;
    color: rgba(var(--color-white), 1);
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      transform: scale(1.2);
      color: rgba(var(--color-white), 0.8);
    }
  }
`;

export const ModalForm = styled.form`
  width: 100%;
  height: 85%;
  padding: 22px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 0 0 4px 4px;
  gap: 10px;

  background-color: rgba(var(--color-grey-3), 1);
`;

export const TechTitleDiv = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  label {
    font-weight: 400;
    font-size: 12.182px;
    color: rgba(var(--color-grey-0));
  }

  input {
    width: 100%;
    padding: 0px 16.2426px;
    height: 48px;
    outline: none;
    border-radius: 4px;
    color: rgba(var(--color-grey-1));
    border: 1.2182px solid rgba(var(--color-grey-2));
    background-color: rgba(var(--color-grey-2), 1);
    transition: 0.3s;
    cursor: not-allowed;

    &:hover {
      background-color: rgba(var(--color-grey-1), 0.1);
    }
  }

  p {
    font-size: 11px;
    color: rgba(var(--color-grey-1), 1);
  }

  p + p {
    font-size: 11px;
    color: rgba(var(--color-negative-pink), 1);
  }
`;

export const TechStatusDiv = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  label {
    font-weight: 400;
    font-size: 12.182px;
    color: rgba(var(--color-grey-0));
  }

  select {
    width: 100%;
    padding: 0px 16.2426px;
    height: 48px;
    outline: none;
    border-radius: 4px;
    color: rgba(var(--color-grey-0));
    border: 1.2182px solid rgba(var(--color-grey-0));
    background-color: rgba(var(--color-grey-2), 1);
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      background-color: rgba(var(--color-grey-1), 0.1);
    }

    &:focus {
      transform: scale(1.02);
      background-color: rgba(var(--color-grey-2), 1);
    }
  }
`;

export const ButtonBoxDiv = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > button {
    width: 45%;
    height: 48px;
    border-radius: 4px;
    cursor: pointer;
    color: rgba(var(--color-grey-0));
    background-color: rgba(var(--color-primary), 1);
    transition: 0.3s;

    &:hover {
      transform: scale(1.02);
      background-color: rgba(var(--color-primary), 0.7);
    }
  }

  & > button + button {
    width: 45%;
    height: 48px;
    border-radius: 4px;
    cursor: pointer;
    color: rgba(var(--color-grey-0));
    background-color: rgba(var(--color-grey-1), 1);
    transition: 0.3s;

    &:hover {
      transform: scale(1.02);
      background-color: rgba(var(--color-negative-pink), 1);
    }
  }
`;
