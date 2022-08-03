import React, { Component } from 'react';
import {BoxNumbers,AllBoxes,Num} from "./AddToCart.style"
import { connect } from "react-redux"
import { increaseCartItemQuantity,decreaseCartItemQuantity } from "../Redux/Actions/Cart";


class AddToCart extends Component  {
    add = (id) => {
        this.props.increaseCartItemQuantity(id)   
    }

    minus = (id) => {
          this.props.decreaseCartItemQuantity(id)
    }


    render(){
        const { product } = this.props;
        console.log(product.quantity)
        return(
            <AllBoxes>
            <BoxNumbers>
                <div onClick={()=>this.add(product.id)} >+</div>
            </BoxNumbers>
            <Num>{product.quantity}</Num>
            <BoxNumbers>
                <div onClick={()=>this.minus(product.id)} >-</div>
            </BoxNumbers>
            </AllBoxes>
        )
    }
}

const mapDispatchToProps = { 
    increaseCartItemQuantity,
    decreaseCartItemQuantity

}
export default connect(null, mapDispatchToProps) (AddToCart);
