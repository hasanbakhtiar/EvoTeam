import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../auth/Login";
import Users from "../Users";
import UserDetails from "../UserDetails";

const AppRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/users" element={<Users/>}></Route>
        <Route path="/users/:id" element={<UserDetails/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouters;
