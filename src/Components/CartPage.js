import React, { Component } from "react";
import Navbar from "./Navbar";
import {
  CartProducts,
  Cost,
  Taxes,
  Quantity,
  Totals,
  Orderbutton,
  AllCartItems,
  Amount,
  Button3,
  TotalAmount,
} from "./Cartpage.style";
import CartItem from "./CartItem";
import { connect } from "react-redux";

class CartPage extends Component {
  getQuantity = () => {
    const { cart } = this.props;
    let quantity = 0;
    cart.map((product) => {
      quantity += product.quantity;
    });
    return quantity;
  };

  getTax = () => {
    const { total } = this.props;
    const tax = ((21 / 100) * total).toFixed(2);
    return tax;
  };

  render() {
    const { cart, total } = this.props;
    return (
      <CartProducts>
        <Navbar />
        {cart.length ? (
          <div>
            <AllCartItems>
              <div>
                <h1>CART</h1>
              </div>

              {cart.map((cartItem) => (
                <CartItem key={cartItem.value} product={cartItem} />
              ))}

              <Cost>
                <Taxes>
                  <TotalAmount>Tax 21%:</TotalAmount>
                  <Amount>{this.getTax()}</Amount>
                </Taxes>
                <Quantity>
                  <TotalAmount>Quantity:</TotalAmount>
                  <Amount>{this.getQuantity()}</Amount>
                </Quantity>
                <Totals>
                  <TotalAmount>Total:</TotalAmount>
                  <Amount>{total}</Amount>
                </Totals>
              </Cost>

              <Orderbutton>
                <Button3>Order</Button3>
              </Orderbutton>
            </AllCartItems>
          </div>
        ) : (
          <div> No Items in Cart</div>
        )}
      </CartProducts>
    );
  }
}
function mapStateToProps(state) {
  const { cart } = state;
  return cart;
}
export default connect(mapStateToProps)(CartPage);
