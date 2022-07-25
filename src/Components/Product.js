import React, { Component } from 'react';
import  Navbar  from './Navbar';
import {Products} from "./Product.style"

class Product extends Component  {
   
    render(){
        return(
            <Products>
                 <Navbar/>
            </Products>

        )
    }
}
export default Product;