import styled from "styled-components";

export const RegisterFormWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const TitleDiv = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & > h2 {
    font-weight: 700;
    height: 15%;
    font-size: 18px;
    line-height: 28px;
    color: rgba(var(--color-grey-0));
  }

  & > p {
    font-weight: 400;
    font-size: 12.182px;
    line-height: 22px;
    color: rgba(var(--color-grey-1));
  }
`;

export const FormRegister = styled.form`
  width: 100%;
  height: 92%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > button {
    width: 100%;
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
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 12.5%;
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
    color: rgba(var(--color-grey-0));
    border: 1.2182px solid rgba(var(--color-grey-0));
    background-color: rgba(var(--color-grey-2), 1);
    transition: 0.3s;
    cursor: text;

    &:hover {
      background-color: rgba(var(--color-grey-1), 0.1);
    }

    &:focus {
      transform: scale(1.02);
      background-color: rgba(var(--color-grey-1), 0.1);
    }
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

  p {
    font-size: 11px;
    color: rgba(var(--color-negative-pink), 1);
  }
`;
