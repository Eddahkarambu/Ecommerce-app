import React, { Component } from 'react';
import Category from './Category';
import { Select,Option } from './CategoryDropdown.style'


class CategoryDropdown extends Component { 
    render() {
      const {categories} = this.props;
      return (
        <Select>
          {categories.map((name) => (
                  <Option key={categories.name}>{categories.name}</Option>
          ))}
        </Select>
      )
      
    }
  }
  
  export default CategoryDropdown;
