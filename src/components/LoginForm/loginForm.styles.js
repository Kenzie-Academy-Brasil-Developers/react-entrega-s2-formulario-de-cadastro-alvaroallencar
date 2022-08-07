import styled from "styled-components";

export const FormDiv = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: space-between;

   h2 {
      width: 100%;
      height: 15%;
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      text-align: center;
      color: rgba(var(--color-grey-0));
   }
`;

export const FormLogin = styled.form`
   width: 100%;
   height: 85%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;

   button {
      width: 100%;
      height: 48px;
      border-radius: 4px;
      cursor: pointer;
      color: rgba(var(--color-grey-0));
      background-color: rgba(var(--color-primary), 1);
   }
`;

export const EmailDiv = styled.div`
   width: 100%;
   height: 35%;
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
   }

   p {
      font-size: 11px;
      color: rgba(var(--color-primary-focus), 1);
   }
`;

export const PasswordDiv = styled.div`
   width: 100%;
   height: 35%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;

   label {
      font-weight: 400;
      font-size: 12.182px;
      color: rgba(var(--color-grey-0));
   }

   & > div {
      display: flex;

      input {
         width: 85%;
         padding: 0px 16.2426px;
         height: 48px;
         outline: none;
         border-radius: 4px;
         color: rgba(var(--color-grey-0));
         border: 1.2182px solid rgba(var(--color-grey-0));
         background-color: rgba(var(--color-grey-2), 1);
      }

      p {
         width: 15%;
         height: 48px;
         align-self: center;
         font-size: 20px;
         border-radius: 4px;
         color: rgba(var(--color-grey-0));
         border: 1.2182px solid rgba(var(--color-grey-0));
         background-color: rgba(var(--color-grey-2), 1);
         display: flex;
         justify-content: center;
         align-items: center;
         cursor: pointer;
      }
   }

   p {
      font-size: 11px;
      color: rgba(var(--color-primary-focus), 1);
   }
`;
