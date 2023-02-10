import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Dashboard from "../pages/admin/Dashboard";
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
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </Container>
    </BrowserRouter>
  );
};

export default App;
