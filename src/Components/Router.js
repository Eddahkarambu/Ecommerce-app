import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import CartPage from "./CartPage";
import Category from "./Category";
import Product from "./Product";
import Login from "./Login";
import Signup from "./Signup";
export default class Paths extends Component {
  render() {
    return (
      <Routes>
        <Route path="Login" exact element={<Login />}></Route>
        <Route path="Signup" exact element={<Signup />}></Route>
        <Route path="/" exact element={<Category />}></Route>
        <Route path="/Product" exact element={<Product />}></Route>
        <Route path="/CartPage" exact element={<CartPage />}></Route>
        <Route path="/Product/:id" exact element={<Product />}></Route>
      </Routes>
    );
  }
}
