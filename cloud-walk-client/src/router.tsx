import Home from "./pages/home";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Category from "./pages/category";
import Product from "./pages/product-details";
import About from "./pages/about";


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/category" element={<Category/>} />
      <Route path="/product/:id" element={<Product/>} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Router;
// LOGIN FALTANDO COISAS DAR OUTRO MERGE DA BRANCH LOGIN FEATURE PARA A DEV ****