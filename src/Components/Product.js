import React, { Component } from 'react';
import  Navbar  from './Navbar';
import  ProductColor from './ProductColor'
import  ProductSize from './ProductSize'
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost'
import {withRouter} from './WithRouter';

import {Products,Img,ProductImages,ProductImagess,ProductSizeWrapper,Images,Psize,SizeOfProduct,PriceProduct,Heading,ColorOfProduct,Pcolor,ProductColorWrapper,Paragraph,AllProducts,AddToCartButton,Button4,Imgs,AllProducts1} from "./Product.style"

const GET_ALL_PRODUCTDETAILS =  gql`
query($id: String!){
    product(id: $id){
      gallery
      name
      description
      attributes{
        name
        items {
          displayValue
          value
        }
      }
    }
  }`

class Product extends Component  {

   
    render(){
        console.log(this.props.params.id)
        return(
            <Query query={GET_ALL_PRODUCTDETAILS} variables={{id:this.props.params.id}}>
            {({loading, error, data}) =>{
            if(loading) return <p> Loading...</p>
            if(error) return <p> {error}</p>
            console.log(data)
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
export default  withRouter(Product);