import React from "react";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter, Switch, Route, Routes, Link } from "react-router-dom";
import Payment from "./pages/Payment";
import Success from "./pages/Success";

const App = () => {
const user=false;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={user?<Home />:<Login />} />
        <Route path="/register" element={user?<Home />:<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
