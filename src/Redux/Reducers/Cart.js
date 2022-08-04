import { ADD_TO_CART,DECREASE_CART_ITEM_QUANTITY,INCREASE_CART_ITEM_QUANTITY,REMOVE_FROM_CART } from '../Actions/ActionTypes';

const initialState = {
    cart: []
}

export const  cart = (state=initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART: {
            const cartItem = action.payload;
            const cartExists = state.cart.filter((item) => item.id === cartItem.id)
            if(cartExists.length){
                return state
            }

            cartItem.quantity = 1
            return {
                ...state,
                cart: [...state.cart, cartItem]
            }
        } 
            case REMOVE_FROM_CART: {
                const id = action.payload;
                const filteredItems = state.cart.filter((product)=> product.id!==id)
                return {
                    ...state,
                    cart:filteredItems,
                }
            }

            case INCREASE_CART_ITEM_QUANTITY: {
                const id = action.payload;
                const increaseCartItemQuantity = state.cart.map((product)=> {
                    if(product.id === id){
                      product.quantity += 1
                    }
                    return Object.assign({}, product)
                })
                return {
                    ...state,
                    cart:[...increaseCartItemQuantity],
                }
            }

            case DECREASE_CART_ITEM_QUANTITY: {
                const id = action.payload;
                const decreaseCartItemQuantity = state.cart.map((product)=> {
                    if(product.id === id && product.quantity > 1){
                       product.quantity -= 1;
                    }
                    return Object.assign({}, product)
                })
                return {
                    ...state,
                    cart:[...decreaseCartItemQuantity],
                }

            }
        default: 
            return state;
    }
}