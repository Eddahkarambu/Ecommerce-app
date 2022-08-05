import React, { Component } from 'react';
import {BoxColor} from "./ProductColor.style"

class ProductColor extends Component  {
    constructor(props){
        super(props)
        this.state = {
            clicked: false
        }
    }

    handleClicked = () => {
        const {clicked} = this.state;
        this.setState({clicked: !clicked});
    }
    render(){
        const { color, onClick } = this.props
        return(
            <BoxColor color={color} onClick={onClick}>
                <div></div>
            </BoxColor>
        )
    }
}
export default ProductColor;