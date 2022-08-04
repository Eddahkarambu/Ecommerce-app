import React, { Component } from 'react';
import  Navbar  from './Navbar';
import  ProductColor from './ProductColor'
import  ProductSize from './ProductSize'
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost'
import {withRouter} from './WithRouter';
import { connect } from "react-redux"
import { addToCart } from "../Redux/Actions/Cart";
import { compose } from "redux"
import { getAmount } from "../Utils"

import {Products,Img,ProductImages,ProductImagess,ProductSizeWrapper,Images,Psize,SizeOfProduct,PriceProduct,Heading,ColorOfProduct,Pcolor,ProductColorWrapper,Paragraph,AllProducts,AddToCartButton,Button4,Imgs,AllProducts1} from "./Product.style"

const GET_ALL_PRODUCTDETAILS =  gql`
query($id: String!){
    product(id: $id){
      id
      gallery
      name
      description
      prices{
        currency {
          label
          symbol
        }
        amount
      }
      attributes{
        name
        type
        items {
          displayValue
          value
        }
      }
    }
  }`

class Product extends Component  {



  handleClick = (product) => {
    this.props.addToCart(product)
  }

   
    render(){ 
      const {currency} = this.props;
      
        return(
            <Query query={GET_ALL_PRODUCTDETAILS} variables={{id:this.props.params.id}}>
            {({loading, error, data}) =>{
            if(loading) return <p> Loading...</p>
            if(error) return <p> {error}</p>
             return (
            <Products>
                 <Navbar/>
                 <AllProducts>
                    <AllProducts1>
                    <Imgs>

                  
                        <ProductImages>
                            <Img src={data.product.gallery[0]}/>
                            <Img src={data.product.gallery[0]}/>
                            <Img src={data.product.gallery[0]}/>
                        </ProductImages>

                        <ProductImagess>
                        <Images src={data.product.gallery[0]}/>
                        </ProductImagess>
                 </Imgs>

                 <div>
                 <Heading>
                        <h3>{data.product.name}</h3>
                    </Heading>
                    
                    {data.product.attributes.map((attribute)=>(
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
                   </SizeOfProduct>)
                       
        ))}
                     <Psize>Price</Psize>
                    <PriceProduct>
                    {getAmount(data.product.prices, currency)}
                    </PriceProduct>
                    <AddToCartButton>
                     <Button4 onClick={()=>this.handleClick(data.product)}>ADD TO CART</Button4>
                    </AddToCartButton>

                    <Paragraph><div dangerouslySetInnerHTML={{__html:data.product.description}} /></Paragraph>
                 </div>
                 </AllProducts1>
                 </AllProducts>
            </Products>
            ) 
                }}
            </Query>

        )
    }
}

function mapStateToProps(state){
  const {currency} = state
  return currency
}

export default compose(
  withRouter,
  connect(mapStateToProps, {addToCart})
) (Product);

