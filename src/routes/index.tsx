import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Auth/Login/Login";
import NavLinks from "src/components/navbar/NavLinks";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signin" replace />} />
      <Route path="signin" element={<Login />} />
      <Route path="/home" element={<NavLinks />} />
    </Routes>
  );
};

export default AuthRoutes;
