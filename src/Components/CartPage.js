import React, { Component } from 'react';
import  Navbar  from './Navbar';
import {CartProducts,Cost,Taxes,Quantity,Totals,Orderbutton,AllCartItems,Amount,Button3,TotalAmount} from "./Cartpage.style"
import CartItem from './CartItem';

class CartPage extends Component  {
   
    render(){
        return(
            <CartProducts>
                 <Navbar/>
                 
                 <AllCartItems>
                    <div>
                        <h1>CART</h1>
                    </div>
                 <CartItem />
                <CartItem />
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
            </CartProducts>

        )
    }
}
export default CartPage;