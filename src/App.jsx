import Routes from "./routes/RoutesMain";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import GlobalStyle from "./styles/globalStyle";
import UserProvider from "./contexts/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <GlobalStyle />
        <Routes />
        <ToastContainer transition={Flip} limit={2} pauseOnFocusLoss={false} />
      </UserProvider>
    </>
  );
}

export default App;
