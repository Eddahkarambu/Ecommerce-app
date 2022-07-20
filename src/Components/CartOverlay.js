import { Fragment,Component } from "react";
import {Overlay, ProductSizeWrapper, ProductColorWrapper} from "./CartOverlay.style"
import  ProductSize from './ProductSize'
import  ProductColor from './ProductColor'

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

                <ProductColorWrapper>
                    <ProductColor color="grey"/>
                    <ProductColor color="black"/>
                    <ProductColor color="green"/>
                </ProductColorWrapper>
              </Overlay>
            )}
          </Fragment>
        )
    }
}
export default CartOverlay;