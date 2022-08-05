import React, { Component } from 'react';
import  Navbar  from './Navbar';
import  ProductColor from './ProductColor'
import  ProductSize from './ProductSize'
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost'
import {withRouter} from './WithRouter';
import { connect } from "react-redux"
import { AddToCartAndCalcTotal } from "../Redux/Actions/Cart";
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

  constructor(props) {
    super(props)
    this.state = {
      selectedOptions: {}
    }
  }

  SelectOption(attr, value){
    const {name} = attr;
    const option = {[name]: value}
    const { selectedOptions} = this.state;
    this.setState({selectedOptions: {...selectedOptions, ...option}})
  }



  handleClick = (product) => {
    const {selectedOptions} = this.state
    const updatedProductAttr = product.attributes.map((attr) => {
      if(selectedOptions[attr.name] !== "undefined"){
         attr.items.map((att) => {
          if(att.value === selectedOptions[attr.name]){
            att.selected =  true
          }
          else {
            att.selected = false
          }
      })
    }
    return attr;
  })

  const updatedProduct = {...product, attributes: updatedProductAttr}

    this.props.AddToCartAndCalcTotal(updatedProduct)
  }

   
    render(){ 
      const {currency} = this.props;
      const { selectedOptions } = this.state;
      
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
                         <ProductColor  key={item.value} color={item.value} onClick={() => this.SelectOption(attribute, item.value)} selected={selectedOptions?.[attribute.name] === item.value}/>

                        ))}
                       </ProductColorWrapper>

                   </ColorOfProduct>)
                       : (<SizeOfProduct key={attribute.name}>
                       <Psize>{attribute.name}</Psize>
                       <ProductSizeWrapper>
                       {attribute.items.map((size)=>(
                         <ProductSize  key={size.value} size={size.value} onClick={() => this.SelectOption(attribute, size.value)} selected={selectedOptions?.[attribute.name] === size.value}/>

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
  connect(mapStateToProps, {AddToCartAndCalcTotal})
) (Product);

