import { Fragment,Component } from "react";
import {Overlay, ProductSizeWrapper} from "./CartOverlay.style"
import  ProductSize from './ProductSize'

class CartOverlay extends Component  {
    render(){
        const { isOpen } = this.props
        return(
            <Fragment>
            {isOpen && (
              <Overlay>
                <h1>Content in overlay</h1>
                <ProductSizeWrapper>
                    <ProductSize size="XS"/>
                    <ProductSize size="S"/>
                    <ProductSize size="M"/>
                    <ProductSize size="L"/>
                </ProductSizeWrapper>
              </Overlay>
            )}
          </Fragment>
        )
    }
}
export default CartOverlay;