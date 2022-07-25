import React, { Component } from 'react';
import  Navbar  from './Navbar';
import  ProductColor from './ProductColor'
import  ProductSize from './ProductSize'
import {Products,Image,ProductImages,ProductImagess,ProductSizeWrapper,Psize,SizeOfProduct,PriceProduct,Heading,ColorOfProduct,Pcolor,ProductColorWrapper,Header,Paragraph} from "./Product.style"

class Product extends Component  {
   
    render(){
        return(
            <Products>
                 <Navbar/>
                 <ProductImages>
                    <Image src='https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg'/>
                    <Image src='https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg'/>
                    <Image src='https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg'/>
                 </ProductImages>

                 <ProductImagess>
                 <Image src='https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg'/>
                 </ProductImagess>

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
            </Products>

        )
    }
}
export default Product;