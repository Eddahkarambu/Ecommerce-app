import React, { Component } from 'react';
import {BoxNumbers,AllBoxes,Num} from "./AddToCart.style"

class AddToCart extends Component  {
    constructor(props){
        super(props)
        this.state = {
            num: 1
        }    
    }
    add = () => {
        const { num } = this.state;
        this.setState({num: num +1 });
        
    }

    minus = () => {
        const {num} = this.state;
        if(num > 0 ){
            this.setState({num: num -1 });
        }    
    }


    render(){
        const { num } = this.state;
        return(
            <AllBoxes>
            <BoxNumbers>
                <div onClick={this.add}>+</div>
            </BoxNumbers>
            <Num>{num}</Num>
            <BoxNumbers>
                <div onClick={this.minus}>-</div>
            </BoxNumbers>
            </AllBoxes>
        )
    }
}
export default AddToCart;