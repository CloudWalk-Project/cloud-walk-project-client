import Router from "./router";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import theme from "./assets/styles/theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { SearchProvider } from "./contexts/SearchContext";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <SearchProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ThemeProvider>
      </SearchProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        closeButton={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
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
