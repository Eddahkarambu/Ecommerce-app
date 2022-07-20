import React,  {Component} from 'react';
import { CardWrapper, CardImage, CardContent, ProductName, ProductPrice } from './Card.style';

class ProductCard extends Component {



    render(){
        return(
            <CardWrapper>
                <CardImage src='https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg' />
                <CardContent>
                    <ProductName>Apollo  Running Short</ProductName>
                    <ProductPrice>$50.00</ProductPrice>

                </CardContent>

            </CardWrapper>
        )
    }
}
export default ProductCard;