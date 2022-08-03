import React,  {Component} from 'react';
import { CardWrapper, CardImage, CardContent, ProductName, ProductPrice } from './Card.style';
import {withRouter} from './WithRouter';
import { connect } from "react-redux"
import { compose } from "redux"
import { getAmount } from "../Utils"


class ProductCard extends Component {
   

    onClickPage = () =>
    {
        const {product} = this.props;
        this.props.navigate(`/Product/${product.id}`);
    }
  
  
    
    render(){
        const {product, currency} = this.props;
        return(
            <CardWrapper onClick={this.onClickPage}>
                <CardImage src={product.gallery[0]} />
                <CardContent>
                    <ProductName>{product.name}</ProductName>
                    <ProductPrice>{getAmount(product.prices, currency)}</ProductPrice>

                </CardContent>

            </CardWrapper>
        )
    }
}
function mapStateToProps(state){
    const {currency} = state
    return currency
}
export default compose(
    withRouter,
    connect(mapStateToProps)
)(ProductCard)