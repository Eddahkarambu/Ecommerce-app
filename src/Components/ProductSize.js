import React, { Component } from 'react';
import {Box} from "./ProductSize.style"

class ProductSize extends Component  {
    constructor(props){
        super(props)
        this.state = {
            clicked: false
        }
    }

    handleClick = () => {
        const {clicked} = this.state;
        this.setState({clicked: !clicked});
    }

    render(){
        const {clicked} = this.state;
        const { size } = this.props
        return(
            <Box clicked={clicked} onClick={this.handleClick} >
                <div >{size}</div>
            </Box>
        )
    }
}
export default ProductSize;