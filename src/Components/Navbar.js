import React, { Component } from 'react';
import CartOverlay from "./CartOverlay"
import DropdownContainer from './DropdownContainer';
import { Nav, NavLink,Arrow,People,Signs,Tools, Cart,Circle,CartDetails} from './Navbar.style'
import logo from '../images/logo.svg'
import CartIcon from '../images/cart.svg'
import { connect } from "react-redux"


class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    }
  }
  
  toggleOverlay = () => {
    const { isOpen } = this.state;
    this.setState({isOpen: !isOpen})
  };


  render() {
    const { isOpen } = this.state;
    const { cart } = this.props;
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
                
                <DropdownContainer/>
                <CartDetails>
                <Cart  onClick={this.toggleOverlay} src={CartIcon} alt="cart"/>   
                {cart.length > 0 && (<Circle>{cart.length}</Circle>)}
                </CartDetails>
                <CartOverlay isOpen={isOpen} onClose={this.toggleOverlay}/> 
                 
          </Signs>

          </Tools>
        </Nav>    
    );
  }
}

function mapStateToProps(state){
  const {cart} = state
  return cart
}
export default connect (mapStateToProps)(Navbar);




