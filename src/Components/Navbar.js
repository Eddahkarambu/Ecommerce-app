import React, { Component } from 'react';
import CartOverlay from "./CartOverlay"
import Dropdown from './Dropdown';
import { Nav, NavLink,Arrow,People,Signs,Tools, Cart,} from './Navbar.style'
import logo from '../images/logo.svg'
import CartIcon from '../images/cart.svg'
// import { ProductSize} from './ProductSize'

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    }
  }
  
  toggleOverlay = () => {
    console.log("here")
    const { isOpen } = this.state;
    this.setState({isOpen: !isOpen})
  };


  render() {
    const { isOpen } = this.state;
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
                <Cart  onClick={this.toggleOverlay} src={CartIcon} alt="cart"/>   
                <CartOverlay isOpen={isOpen} onClose={this.toggleOverlay}/> 
                 
          </Signs>

          </Tools>
        </Nav>    
    );
  }
}

export default Navbar;



