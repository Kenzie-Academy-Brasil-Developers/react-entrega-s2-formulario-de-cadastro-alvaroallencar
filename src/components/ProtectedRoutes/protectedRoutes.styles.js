import styled from "styled-components";

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
      animation: LoadingMessageSpin infinite 1.5s linear;
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
