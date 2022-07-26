import React, { Component } from 'react';
import  ProductColor from './ProductColor'
import  AddToCart from './AddToCart'
import  ProductImage from './ProductImage'
import  ProductSize from './ProductSize'
import {AllCartItems,ItemDescription,Heading,PriceProduct,SizeOfProduct,ColorOfProduct,AddToCartBoxes,AddToCartImage,Psize,Pcolor,ProductSizeWrapper,ProductColorWrapper,AddTo} from "./CartItem.style"


class CartItem extends Component  {
   
    render(){
        return(
            <AllCartItems>
                <ItemDescription>
                    <Heading>
                        <div>Apollo</div>
                        <div>Running Short</div>
                    </Heading>
                    <PriceProduct>
                        <div>$50.00</div>
                    </PriceProduct>
                    <SizeOfProduct>
                        <Psize>Size</Psize>
                        <ProductSizeWrapper>
                        <ProductSize size="XS"/>
                        <ProductSize size="S"/>
                        <ProductSize size="M"/>
                        <ProductSize size="L"/>
                        </ProductSizeWrapper>
                    </SizeOfProduct>
                    <ColorOfProduct>
                        <Pcolor>Color</Pcolor>
                        <ProductColorWrapper>
                        <ProductColor color="grey"/>
                        <ProductColor color="black"/>
                        <ProductColor color="green"/>
                        </ProductColorWrapper>

                    </ColorOfProduct>
                    <div>

                    </div>
                </ItemDescription>
                <AddTo>
                <AddToCartBoxes><AddToCart/></AddToCartBoxes>
                <AddToCartImage><ProductImage/></AddToCartImage>
                </AddTo>
            </AllCartItems>
        )
    }
}
export default CartItem;