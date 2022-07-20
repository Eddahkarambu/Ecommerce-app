import React, { Component } from 'react';
import  Navbar  from './Navbar';
import ProductCard from './Card';
import { ProductWrapper } from './Category.style';

class Category extends Component {
    render() {
      return (
        <div>
        <Navbar/>
        <div>
            <h1>Category Name</h1>
          </div>
        <ProductWrapper>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </ProductWrapper>
        </div>
      );
    }
  }
  
  export default Category;