import { Fragment,Component } from "react";
import {Overlay} from "./CartOverlay.style"
import  ProductSize from './ProductSize'

class CartOverlay extends Component  {
    render(){
        const { isOpen } = this.props
        return(
            <Fragment>
            {isOpen && (
              <Overlay>
                <h1>Content in overlay</h1>
                <ProductSize/>
              </Overlay>
            )}
          </Fragment>
        )
    }
}
export default CartOverlay;