import Home from "./pages/home";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Manage from "./pages/manage";
import Product from "./pages/product-details";
import About from "./pages/about";
import Password from "./pages/passwordrecover";
import Report from "./pages/report";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/manage" element={<Manage />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/about" element={<About />} />
      <Route path="/password/:id" element={<Password />} />
      <Route path="/report" element={<Report />} />
    </Routes>
  );
};

export default Router;
// LOGIN FALTANDO COISAS DAR OUTRO MERGE DA BRANCH LOGIN FEATURE PARA A DEV ****
