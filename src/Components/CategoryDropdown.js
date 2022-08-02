import React, { Component } from 'react';
import { Select,Option } from './CategoryDropdown.style'


class CategoryDropdown extends Component { 
    render() {
      const {categories} = this.props;
      return (
        <Select>
          {categories.map((category) => (
                  <Option key={category.name}>{category.name}</Option>
          ))}
        </Select>
      )
      
    }
  }
  
  export default CategoryDropdown;
