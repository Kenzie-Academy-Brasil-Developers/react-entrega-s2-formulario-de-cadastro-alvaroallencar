import Routes from "./routes/RoutesMain";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import GlobalStyle from "./styles/globalStyle";
import Provider from "./Providers";

function App() {
  return (
    <>
      <Provider>
        <GlobalStyle />
        <Routes />
        <ToastContainer
          transition={Flip}
          limit={2}
          pauseOnFocusLoss={false}
          theme={"dark"}
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={true}
          closeOnClick={true}
          newestOnTop={false}
          pauseOnHover={true}
          draggable={true}
        />
      </Provider>
    </>
  );
}

export default App;
