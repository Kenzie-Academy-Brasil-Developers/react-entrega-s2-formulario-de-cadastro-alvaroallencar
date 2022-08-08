import styled from "styled-components";

export const RegisterPageWrapper = styled.div`
   width: 100%;
   min-height: 100vh;
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   align-items: center;
   gap: 40px;
   padding: 48px;
`;

export const RegisterHeader = styled.div`
   width: 370px;
   display: flex;
   justify-content: space-between;
   align-items: center;
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

   & > button {
      width: 67.49px;
      height: 40.11px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0px 16.2426px;
      border-radius: 4px;
      font-weight: 600;
      font-size: 12px;
      line-height: 28px;
      color: rgba(var(--color-grey-0));
      background-color: rgba(var(--color-grey-3));
      cursor: pointer;
      transition: 0.3s;

      &:hover {
         transform: scale(1.02);
         background-color: rgba(var(--color-primary), 1);
      }
   }
`;

export const RegisterSection = styled.section`
   width: 370px;
   height: 1000px;
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
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 28px;
   }
`;
