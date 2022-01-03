import React from "react";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter,Switch, Route,Routes , Link } from "react-router-dom";
import Payment from "./pages/Payment";
import Success from "./pages/Success";



const App = () => {
  return (
    <BrowserRouter>
    <Routes>

    <Route path="/pay" element={<Payment/>}/>
    <Route path="/success" element={<Success/>}/>
    </Routes>


    </BrowserRouter>);
};

export default App;
