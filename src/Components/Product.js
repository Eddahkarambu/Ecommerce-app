import React, { Component } from 'react';
import  Navbar  from './Navbar';
import  ProductColor from './ProductColor'
import  ProductSize from './ProductSize'

import {Products,Img,ProductImages,ProductImagess,ProductSizeWrapper,Images,Psize,SizeOfProduct,PriceProduct,Heading,ColorOfProduct,Pcolor,ProductColorWrapper,Paragraph,AllProducts,AddToCartButton,Button4,Imgs,AllProducts1} from "./Product.style"

class Product extends Component  {
   
    render(){
        return(
            <Products>
                 <Navbar/>

                 <AllProducts>
                    <AllProducts1>
                    <Imgs>
                        <ProductImages>
                            <Img src='https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg'/>
                            <Img src='https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg'/>
                            <Img src='https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg'/>
                        </ProductImages>

                        <ProductImagess>
                        <Images src='https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg'/>
                        </ProductImagess>
                 </Imgs>

                 <div>
                 <Heading>
                        <h3>Apollo</h3>
                        <h3>Running Short</h3>
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
                        <div>Price:</div>
                        <div>$50.00</div>
                    </PriceProduct>

                    <AddToCartButton>
                     <Button4>ADD TO CART</Button4>
                    </AddToCartButton>

                    <Paragraph>
                        Find stunning women cocktail dresses and party dresses.Stand out in lace and metallic cockatail dresses and party dresses from all your favourite brands
                    </Paragraph>

                 </div>
                 </AllProducts1>
                 </AllProducts>
            </Products>

        )
    }
}
export default Product;