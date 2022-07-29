import React, { Component } from 'react';
import { Select,Option } from './CategoryDropdown.style'


class CategoryDropdown extends Component { 
    render() {
      const {categories} = this.props;
      return (
        <Select>
          {currencies.map((currency) => (
                  <Option key={currency.label}>{currency.symbol}{currency.label}</Option>
          ))}
        </Select>
      )
      
    }
  }
  
  export default CategoryDropdown;
