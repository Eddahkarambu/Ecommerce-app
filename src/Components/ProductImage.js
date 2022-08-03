import React, { Component } from 'react';
import {Image,CardImage} from "./ProductImage.style"

class ProductImage extends Component  {
   
    render(){
        const {img} = this.props
        return(
            <CardImage>
                <Image src={img}>
                </Image>
            </CardImage>
        )
    }
}
export default ProductImage;