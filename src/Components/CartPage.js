import React, { Component } from 'react';
import  Navbar  from './Navbar';
import  ProductColor from './ProductColor'
import  ProductSize from './ProductSize'
import {CartProducts,ProductSizeWrapper,Psize,SizeOfProduct,PriceProduct,Heading,ColorOfProduct,Pcolor,ProductColorWrapper,Header,Paragraph} from "./Cartpage.style"

class CartPage extends Component  {
   
    render(){
        return(
            <CartProducts>
                 <Navbar/>
                 
                 <div>
                 <Heading>
                        <div>Apollo</div>
                        <div>Running Short</div>
                    </Heading>

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

                    <PriceProduct>
                        <div>$50.00</div>
                    </PriceProduct>

                    <Header>
                      ADD TO CART
                    </Header>

                    <Paragraph>
                        Find stunning women cocktail dresses and party dresses.
                        Stand out in lace and metallic cockatail dresses and party dresses from all your favourite brands
                    </Paragraph>

                 </div>

                 <div>
                 <Heading>
                        <div>Apollo</div>
                        <div>Running Short</div>
                    </Heading>

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

                    <PriceProduct>
                        <div>$50.00</div>
                    </PriceProduct>

                    <Header>
                      ADD TO CART
                    </Header>

                    <Paragraph>
                        Find stunning women cocktail dresses and party dresses.
                        Stand out in lace and metallic cockatail dresses and party dresses from all your favourite brands
                    </Paragraph>

                 </div>
            </CartProducts>

        )
    }
}
export default CartPage;