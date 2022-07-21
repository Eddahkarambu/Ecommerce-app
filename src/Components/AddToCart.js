import React, { Component } from 'react';
import {BoxNumbers} from "./AddToCart.style"

class AddToCart extends Component  {
    constructor(props){
        super(props)
    }

    

    render(){
        const { Numbers } = this.props
        return(
            <BoxNumbers >
                <div>{Numbers}</div>
            </BoxNumbers>
        )
    }
}
export default AddToCart;