import React, { Component } from 'react';
import {BoxColor} from "./ProductColor.style"

class ProductColor extends Component  {

    render(){
        const { color, onClick, selected } = this.props
        return(
            <BoxColor color={color} onClick={onClick} clicked={selected}/>
        )
    }
}
export default ProductColor;