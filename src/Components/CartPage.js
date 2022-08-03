import React, { Component } from 'react';
import  Navbar  from './Navbar';
import {CartProducts,Cost,Taxes,Quantity,Totals,Orderbutton,AllCartItems,Amount,Button3,TotalAmount} from "./CartPage.style"
import CartItem from './CartItem';
import { connect } from "react-redux"

class CartPage extends Component  {
   
    render(){
             const { cart } = this.props
             console.log(cart)
        return(
            <CartProducts>
                 <Navbar/>
                 {cart.length? (
                 <div>
                 <AllCartItems>
                    <div>
                        <h1>CART</h1>
                    </div>
                    
                    {cart.map((cartItem) => (
                  <CartItem product={cartItem}/>
                ))}
                
                <Cost>
                <Taxes>
                        <TotalAmount>Tax 21%:</TotalAmount>
                        <Amount>$42.00</Amount>
                  </Taxes>
                <Quantity>
                        <TotalAmount>Quantity:</TotalAmount>
                        <Amount>3</Amount>
                  </Quantity>
                    <Totals>
                        <TotalAmount>Total:</TotalAmount>
                        <Amount>$ 200.00</Amount>
                  </Totals>
                </Cost>

                <Orderbutton>
                    <Button3>Order</Button3>
                </Orderbutton>
                 </AllCartItems>
                
                 </div>) : (
                    <div> No Items in Cart</div>)}
            </CartProducts>

        )
    }
}
function mapStateToProps(state){
    const {cart} = state
    return cart
  }
  export default  connect(mapStateToProps) (CartPage);
