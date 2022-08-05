import { Fragment,Component } from "react";
import {Overlay,CheckoutButtons,Costs,Button1,Button2,FragmentOverlay} from "./CartOverlay.style"
import CartItem from './CartItem';
import { connect } from "react-redux"
import { compose } from "redux"
import {withRouter} from './WithRouter';

class CartOverlay extends Component  {
  
  onClickPage = () =>
  { 
      this.props.navigate(`/CartPage`);
  }
    render(){
        const { isOpen, cart, total } = this.props
        console.log(cart, total)
        return(
            <Fragment>
              
            {isOpen && (
              <FragmentOverlay>
              <Overlay>
                {cart.length? (
                <div>
                {cart.map((cartItem) => (
                  <CartItem product={cartItem}/>
                ))}
                <Costs>
                  <div>Total</div>
                  <div>{total}</div>
                </Costs>
             
                <CheckoutButtons>
                  <Button1 onClick={this.onClickPage}>VIEW BAG</Button1>
                <Button2>CHECK OUT</Button2>
                </CheckoutButtons>
                </div>) : (
                <div> No Items in Cart</div>)}
              </Overlay>
              </FragmentOverlay>
            )}
            
          </Fragment>
        )
    }
}

function mapStateToProps(state){
  const {cart, total} = state
  return cart
}


export default compose(
  withRouter,
  connect(mapStateToProps)
)(CartOverlay);