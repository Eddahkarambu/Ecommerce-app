import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Category from "./Category";


export default class Paths extends Component {
    render() {
        return (
            <Routes>
                    <Route path="/" exact element={<Category/>}></Route>
                </Routes>
        )
    }
}