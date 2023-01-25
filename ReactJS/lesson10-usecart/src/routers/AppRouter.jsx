import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Products from "../pages/Products";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </Container>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
