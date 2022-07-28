import React,  {Component} from 'react';
import { CardWrapper, CardImage, CardContent, ProductName, ProductPrice } from './Card.style';
import {withRouter} from './WithRouter';



class ProductCard extends Component {
   

    onClickPage = () =>
    {
        const {product} = this.props;
        this.props.navigate(`/Product/${product.id}`);
    }
  
  
    
    render(){
        const {product} = this.props;
        return(
            <CardWrapper onClick={this.onClickPage}>
                <CardImage src={product.gallery[0]} />
                <CardContent>
                    <ProductName>{product.name}</ProductName>
                    <ProductPrice>${product.prices[0].amount}</ProductPrice>

                </CardContent>

            </CardWrapper>
        )
    }
}
export default withRouter(ProductCard);