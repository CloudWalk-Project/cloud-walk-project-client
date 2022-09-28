import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} /> 
    </Routes>
  );
};

export default Router;
// LOGIN FALTANDO COISAS DAR OUTRO MERGE DA BRANCH LOGIN FEATURE PARA A DEV ****