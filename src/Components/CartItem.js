import React, { Component } from 'react';
import  ProductColor from './ProductColor'
import  AddToCart from './AddToCart'
import  ProductImage from './ProductImage'
import  ProductSize from './ProductSize'
import { getAmount } from "../Utils"
import { connect } from "react-redux"
import { removeFromCart} from "../Redux/Actions/Cart";
import {AllCartItems,ItemDescription,Heading,PriceProduct,SizeOfProduct,ColorOfProduct,AddToCartBoxes,AddToCartImage,Psize,Pcolor,ProductSizeWrapper,ProductColorWrapper,AddTo} from "./CartItem.style"


class CartItem extends Component  {
    
  handleClick = (id) => {
    console.log(id)
    this.props.removeFromCart(id)
  }
   
    render(){
        const { product, currency} = this.props;
        console.log(product)
        return(
            <AllCartItems>
                <ItemDescription>
                    <Heading>
                        <div>{product.name}</div>
                    </Heading>
                    <PriceProduct>
                        <div>{getAmount(product.prices, currency)}</div>
                    </PriceProduct>
                    {product.attributes.map((attribute)=>(
                       attribute.type === "swatch" 
                       ? (<ColorOfProduct  key={attribute.name}>
                       <Pcolor>{attribute.name}</Pcolor>
                       <ProductColorWrapper>
                       {attribute.items.map((item)=>(
                         <ProductColor  key={item.value} color={item.value}/>

                        ))}
                       </ProductColorWrapper>

                   </ColorOfProduct>)
                       : (<SizeOfProduct key={attribute.name}>
                       <Psize>{attribute.name}</Psize>
                       <ProductSizeWrapper>
                       {attribute.items.map((size)=>(
                         <ProductSize  key={size.value} size={size.value}/>

                        ))}
                     
                       </ProductSizeWrapper>
                   </SizeOfProduct>
                   )
        ))}        
                   <button onClick={()=>this.handleClick(product.id)} >Remove Cart</button>
                    <div>

                    </div>
                </ItemDescription>
                <AddTo>
                <AddToCartBoxes><AddToCart product={product}/></AddToCartBoxes>
                <AddToCartImage><ProductImage img={product.gallery[0]}/></AddToCartImage>
                </AddTo>
            </AllCartItems>
        )
    }
}
function mapStateToProps(state){
    const {currency} = state
    return currency
}
export default connect(mapStateToProps, {removeFromCart}) (CartItem);