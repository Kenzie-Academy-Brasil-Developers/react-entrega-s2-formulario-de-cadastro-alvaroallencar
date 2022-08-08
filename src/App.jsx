import Routes from "./routes/RoutesMain";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import GlobalStyle from "./styles/globalStyle";

function App() {
   return (
      <>
         <GlobalStyle />
         <Routes />
         <ToastContainer transition={Flip} limit={2} pauseOnFocusLoss={false} />
      </>
   );
}

export default App;
