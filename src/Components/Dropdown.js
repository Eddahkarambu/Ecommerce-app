import React, { Component } from 'react';
import { Select,Option } from './Dropdown.style'


class Dropdown extends Component { 
    render() {
      const {currencies} = this.props;
      return (
        <Select>
          {currencies.map((currency) => (
                  <Option key={currency.label}>{currency.symbol}  {currency.label}</Option>
          ))}
        </Select>
      )
      
    }
  }
  
  export default Dropdown;


  

