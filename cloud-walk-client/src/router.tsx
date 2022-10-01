import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Category from "./pages/category";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/category" element={<Category/>} />
    </Routes>
  );
};

export default Router;
