import React, { Component } from 'react';
import Dropdown from './Dropdown';
import { Nav, NavLink,Arrow,People,Signs,Tools} from './Navbar.style'
import logo from '../images/logo.svg'
import Cart from '../images/cart.svg'
import dolar from '../images/dolar.svg'



class Navbar extends Component {
  render() {
    return (
      
      <Nav>
        <Tools>
          <People>
            <NavLink className="active" to="">Women</NavLink>
            <NavLink to="">Men</NavLink>
            <NavLink to="">Kids</NavLink>
            </People>
            
            <Arrow>
                <img  src={logo} alt="logo1"/>    
            </Arrow>
            <Signs>
                
                <Dropdown/>
                <img src={Cart} alt="cart"/>               
          </Signs>
          </Tools>
        </Nav>    
    );
  }
}

export default Navbar;



