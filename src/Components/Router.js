import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Cartpage from "./Cartpage";
import Category from "./Category";
import Product from "./Product";


export default class Paths extends Component {
    render() {
        return (
            <Routes>
                    <Route path="/" exact element={<Category/>}></Route>
                    <Route path="/Product" exact element={<Product/>}></Route>
                    <Route path="/Cartpage" exact element={<Cartpage/>}></Route>
                </Routes>
        )
    }
}