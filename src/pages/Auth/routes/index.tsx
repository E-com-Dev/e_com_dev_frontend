import React from "react";
import { Navigate, Route, Routes, Outlet } from "react-router-dom";
import Login from "../Login/Login";

const Authentication = () => {
  return <Outlet />;
};

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Authentication />}>
        <Route path="/" element={<Navigate to="/signin" replace />} />
        <Route path="signin" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AuthRoutes;
