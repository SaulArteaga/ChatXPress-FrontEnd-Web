import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../../pages/Login/Login";
import Home from "../../pages/main/Home";
import FindUser from "../../pages/FindUser/FindUser";
import CreateUser from "../../pages/CreateUser/CreateUser";

function AdminApp() {
  return (
    /**
     * Using the module react-router-dom we create the routes to the pages
     * we are creating, in this case we have two.
     */
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/findUser" element={<FindUser />} />
      <Route path="/createUser" element={<CreateUser />} />
    </Routes>
  );
}

export default AdminApp;
