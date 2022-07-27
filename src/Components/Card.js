import React,  {Component} from 'react';
import { CardWrapper, CardImage, CardContent, ProductName, ProductPrice } from './Card.style';

class ProductCard extends Component {

    render(){
        const {product} = this.props;
        console.log(product)
        return(
            <CardWrapper>
                <CardImage src={product.gallery[0]} />
                <CardContent>
                    <ProductName>{product.name}</ProductName>
                    <ProductPrice>${product.prices[0].amount}</ProductPrice>

                </CardContent>

            </CardWrapper>
        )
    }
}
export default ProductCard;