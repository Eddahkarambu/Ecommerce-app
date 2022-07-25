import { Fragment,Component } from "react";
import {Overlay,CheckoutButtons,Costs,Button1,Button2} from "./CartOverlay.style"
import CartItem from './CartItem';


class CartOverlay extends Component  {
    render(){
        const { isOpen } = this.props
        return(
            <Fragment>
            {isOpen && (
              <Overlay>
                <CartItem />
                <CartItem />
                <Costs>
                  <div>Total</div>
                  <div>$ 200.00</div>
                </Costs>
             
                <CheckoutButtons>
                  <Button1>VIEW BAG</Button1>
                <Button2>CHECK OUT</Button2>
                </CheckoutButtons>
   
              </Overlay>
            )}
          </Fragment>
        )
    }
}
export default CartOverlay;