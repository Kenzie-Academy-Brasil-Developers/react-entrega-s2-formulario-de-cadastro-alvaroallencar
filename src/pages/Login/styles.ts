import styled from "styled-components";

export const LoginPageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 48px;
  gap: 35px;
`;

export const LoginSection = styled.section`
  width: 370px;
  height: 502px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 34px;
  padding: 42px 22px;
  background-color: rgba(var(--color-grey-3));
  box-shadow: 0px 4px 20px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  transition: 0.5s;
  @media screen and (max-width: 400px) {
    & {
      width: 300px;
    }
  }
  @media screen and (max-width: 300px) {
    & {
      width: 250px;
    }
  }
  & > div {
    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  & > div + div {
    width: 100%;
    height: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    p {
      width: 100%;
      font-weight: 600;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      line-height: 18px;
      color: rgba(var(--color-grey-1));
    }
    button {
      width: 100%;
      height: 48px;
      color: rgba(var(--color-grey-0));
      background-color: rgba(var(--color-grey-1));
      border-radius: 4px;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        transform: scale(1.02);
        background-color: rgba(var(--color-primary), 0.7);
      }
    }
  }
`;

export const LoadingMessage = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  font-size: 5rem;

  @media (prefers-reduced-motion: no-preference) {
    & {
      animation: LoadingMessageSpin infinite 1s linear;
    }
  }

  @keyframes LoadingMessageSpin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
