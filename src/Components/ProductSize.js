import React, { Component } from 'react';
import {Box} from "./ProductSize.style"

class ProductSize extends Component  {
   
    render(){
        const { isOpen } = this.props
        return(
            <Box>
            <div>XS</div>
            </Box>
        )
    }
}
export default ProductSize;