import React, { Component } from 'react';
import {Image,CardImage} from "./ProductImage.style"

class ProductImage extends Component  {
   
    render(){
        return(
            <CardImage>
                <Image src='https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg'>
                </Image>
            </CardImage>
        )
    }
}
export default ProductImage;