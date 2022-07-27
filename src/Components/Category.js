import React, { Component } from 'react';
import  Navbar  from './Navbar';
import ProductCard from './Card';
import { ProductWrapper } from './Category.style';
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost'


const GET_ALL_TECH = gql`
query {
  category(input: {title: "all"}) {
    name,
    products{
      id,
      name,
      gallery,
      inStock,
      prices{
        currency{
          symbol
          label
        }
        amount
      }
    }
  }
}
`

class Category extends Component {
    render() {
      return (
        <div>
        <Navbar/>
        <div>
            <h1>Category Name</h1>
          </div>
          
        <ProductWrapper>
          <Query query={GET_ALL_TECH}>
            {({loading, error, data}) =>{
              if(loading) return <p> Loading...</p>
              if(error) return <p> {error}</p>
              return data.category.products.map((product)=>(
                <ProductCard key={product.id} product={product}/>
              ))    
              }}
            </Query>
        </ProductWrapper>
        </div>
      );
    }
  }
  
  export default Category;