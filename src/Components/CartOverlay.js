import { Fragment,Component } from "react";
import {Overlay,CheckoutButtons,Costs,Button1,Button2} from "./CartOverlay.style"
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
        const { isOpen, cart } = this.props
        return(
            <Fragment>
              
            {isOpen && (
              <Overlay>
                {cart.length? (
                <div>
                {cart.map((cartItem) => (
                  <CartItem product={cartItem}/>
                ))}
                <Costs>
                  <div>Total</div>
                  <div>$ 200.00</div>
                </Costs>
             
                <CheckoutButtons>
                  <Button1 onClick={this.onClickPage}>VIEW BAG</Button1>
                <Button2>CHECK OUT</Button2>
                </CheckoutButtons>
                </div>) : (
                <div> No Items in Cart</div>)}
   
              </Overlay>
            )}
          </Fragment>
        )
    }
}

function mapStateToProps(state){
  const {cart} = state
  return cart
}


export default compose(
  withRouter,
  connect(mapStateToProps)
)(CartOverlay);