import React, { Component } from 'react';
import {Box} from "./ProductSize.style"

class ProductSize extends Component  {


    render(){
        const { size, onClick, selected} = this.props
        return(
            <Box clicked={selected} onClick={onClick} >
                <div >{size}</div>
            </Box>
        )
    }
}
export default ProductSize;