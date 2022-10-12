import { Toaster } from "react-hot-toast";
import Router from "./router";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import theme from "./assets/styles/theme";
<<<<<<< HEAD
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
=======
>>>>>>> home

const App = () => {
  return (
<<<<<<< HEAD
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
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
=======
    <div>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Router />
    </div>
>>>>>>> home
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
