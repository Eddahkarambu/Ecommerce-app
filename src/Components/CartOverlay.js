import { Fragment,Component } from "react";
import {Overlay,} from "./CartOverlay.style"
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
                <div>

                </div>
                <div>
                  
                </div>
   
              </Overlay>
            )}
          </Fragment>
        )
    }
}
export default CartOverlay;