import Home from "./pages/home";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import About from "./pages/about";
import { useAuth } from "./contexts/auth";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Router;
