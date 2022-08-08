import React, { Component } from "react";
import {
  CardWrapper,
  CardImage,
  CardContent,
  ProductName,
  ProductPrice,
  Order,
  CartIcons,
  IconCart,
} from "./Card.style";
import { withRouter } from "./WithRouter";
import { connect } from "react-redux";
import { compose } from "redux";
import { getAmount } from "../Utils";
import CartIcon from "../images/cart.svg";

class ProductCard extends Component {
  onClickPage = () => {
    const { product } = this.props;
    if (product.inStock) {
      this.props.navigate(`/Product/${product.id}`);
    }
  };

  render() {
    const { product, currency } = this.props;
    return (
      <CardWrapper onClick={this.onClickPage}>
        {!product.inStock && <Order>OUT OF STOCK</Order>}
        <CardImage src={product.gallery[0]} />
        <CardContent>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>{getAmount(product.prices, currency)}</ProductPrice>
        </CardContent>
        {product.inStock && (
          <IconCart>
            <CartIcons src={CartIcon} alt="cart" />
          </IconCart>
        )}
      </CardWrapper>
    );
  }
}
function mapStateToProps(state) {
  const { currency } = state;
  return currency;
}
export default compose(withRouter, connect(mapStateToProps))(ProductCard);
