import styled from "styled-components";

export const HomePageWrapper = styled.div`
   width: 100%;
   max-width: 800px;
   min-height: 100vh;
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;

   @media screen and (max-width: 820px) {
      & {
         width: 90%;
      }
   }

   @media screen and (max-width: 400px) {
      & {
         width: 95%;
      }
   }
`;

export const Header = styled.header`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100vw;
   height: 76px;
   border-bottom: 2px solid rgba(var(--color-grey-3));
`;

export const HeaderContainer = styled.div`
   width: 100%;
   max-width: 800px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   transition: 0.5s;

   @media screen and (max-width: 820px) {
      & {
         width: 90%;
      }
   }

   @media screen and (max-width: 400px) {
      & {
         width: 95%;
      }
   }

   div {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
   }

   div + div {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      button {
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
      }
   }
`;

export const SectionContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100vw;
   border-bottom: 2px solid rgba(var(--color-grey-3));

   section {
      height: 118px;
      width: 100%;
      max-width: 800px;
      display: flex;
      justify-content: space-between;
      transition: 0.5s;

      @media screen and (max-width: 820px) {
         & {
            width: 90%;
         }
      }

      @media screen and (max-width: 400px) {
         & {
            width: 95%;
         }
      }
   }
`;

export const WelcomeMessageDiv = styled.div`
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;

   p {
      height: 100%;
      word-wrap: break-word;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      color: rgba(var(--color-grey-0));
   }
`;

export const UserModuleDiv = styled.div`
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;

   p {
      height: 100%;
      display: flex;
      word-wrap: break-word;
      justify-content: center;
      align-items: center;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      color: rgba(var(--color-grey-1));
   }
`;

export const UserTechInfoMain = styled.main`
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   padding-top: 40px;
   gap: 30px;

   p {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 20px;
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      color: rgba(var(--color-grey-0));
   }

   p + p {
      font-weight: 700;
      font-size: 50px;
      line-height: 28px;
      color: rgba(var(--color-grey-0));
   }
`;
