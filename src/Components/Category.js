import React, { Component } from 'react';
import  Navbar  from './Navbar';
import ProductCard from './Card';
import { ProductWrapper,CategoryHeader } from './Category.style';
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost'
import { connect } from "react-redux"
import CategoryDropdownContainer from './CategoryDropdownContainer';


const GET_ALL_TECH = gql`
query($title: String!) {
  category(input: {title: $title}) {
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
      const { category } = this.props;
      return (
        <div>
        <Navbar/>
        
        <div>
    
            <CategoryHeader>Category Name <CategoryDropdownContainer/> </CategoryHeader> 
          </div>
          
        <ProductWrapper>
          <Query query={GET_ALL_TECH} variables={{title: category}}>
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
  function mapStateToProps(state){
    const {category} = state
    return category
}
export default connect (mapStateToProps)(Category);

  