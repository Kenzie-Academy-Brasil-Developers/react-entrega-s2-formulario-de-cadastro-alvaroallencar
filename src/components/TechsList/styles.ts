import styled from "styled-components";

export const TechsListWrapper = styled.ul`
  width: 100%;
  max-width: 800px;
  padding: 20px;
  transition: 0.5s;

  display: flex;
  flex-direction: column;
  gap: 16px;

  color: rgba(var(--color-white), 1);
  background-color: rgba(var(--color-grey-3), 1);
  border-radius: 4px;
`;

export const TechItem = styled.li`
  width: 100%;
  padding: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: rgba(var(--color-grey-4), 1);
  border-radius: 4px;
  cursor: pointer;

  & > div {
    width: 80%;

    & > p {
      width: 100%;
      word-break: break-all;
    }

    @media screen and (max-width: 820px) {
      & {
        width: 70%;

        & > p {
          font-size: 0.906em;
        }
      }
    }

    @media screen and (max-width: 400px) {
      & {
        width: 60%;
      }
    }
  }

  & > div + div {
    width: 20%;
    display: flex;
    justify-content: flex-end;
    text-align: center;
    gap: 20px;

    & > p {
      width: 100%;
      word-break: break-all;
    }

    @media screen and (max-width: 820px) {
      & {
        width: 30%;

        & > p {
          font-size: 0.906em;
        }
      }
    }

    @media screen and (max-width: 400px) {
      & {
        width: 40%;
      }
    }
  }
`;
