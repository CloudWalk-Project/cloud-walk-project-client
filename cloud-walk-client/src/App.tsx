import { Toaster } from "react-hot-toast";
import Router from "./router";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import theme from "./assets/styles/theme";

const App = () => {
  return (
    <div>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Router />
    </div>
  );
};

// function App() {
//   return (
//     <>
//       <ThemeProvider theme={theme}>
//         <BrowserRouter>
//           <Toaster position="bottom-center" reverseOrder={false} />
//           <Router />
//         </BrowserRouter>
//       </ThemeProvider>
//     </>
//   );
// }

export default App;
