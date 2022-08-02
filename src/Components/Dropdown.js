import React, { Component } from 'react';
import { connect } from "react-redux"
import { changeCurrency } from "../Redux/Actions/Currency";
import { Select,Option } from './Dropdown.style'


class Dropdown extends Component { 

    handleChange = (e) => {
      this.props.changeCurrency(e.target.value)
    }
    render() {
      const {currencies} = this.props;
      return (
        <Select onChange={this.handleChange}>
          {currencies.map((currency) => (
                  <Option key={currency.label} value={currency.label}>{currency.symbol}{currency.label}</Option>
          ))}
        </Select>
      )
      
    }
  }
  
  export default connect(null, {changeCurrency}) (Dropdown)


  

