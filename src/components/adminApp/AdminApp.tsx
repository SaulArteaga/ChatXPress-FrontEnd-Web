import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../../pages/Login/Login";
import Home from "../../pages/main/Home";

function AdminApp() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default AdminApp;
