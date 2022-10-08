import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Product from "./pages/product-details";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/product-detail" element={<Product/>} />
    </Routes>
  );
};

export default Router;
