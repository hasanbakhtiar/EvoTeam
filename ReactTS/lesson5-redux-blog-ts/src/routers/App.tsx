import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Dashboard from "../pages/admin/Dashboard";
import AddBlog from "../pages/admin/update/AddBlog";
import EditBlog from "../pages/admin/update/EditBlog";
import Blogs from "../pages/Blogs";
import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Container>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/admin" element={<Dashboard />}></Route>
        <Route path="/add" element={<AddBlog />}></Route>
        <Route path="/edit/:id" element={<EditBlog />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </Container>
    </BrowserRouter>
  );
};

export default App;
