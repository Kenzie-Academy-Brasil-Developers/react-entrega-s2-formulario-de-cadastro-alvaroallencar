import Routes from "./routes/RoutesMain";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import GlobalStyle from "./styles/globalStyle";
import UserProvider from "./contexts/UserContext";
import TechProvider from "./contexts/TechContext";

function App() {
  return (
    <>
      <UserProvider>
        <TechProvider>
          <GlobalStyle />
          <Routes />
          <ToastContainer
            transition={Flip}
            limit={2}
            pauseOnFocusLoss={false}
          />
        </TechProvider>
      </UserProvider>
    </>
  );
}

export default App;
