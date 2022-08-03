import { ADD_TO_CART,REMOVE_FROM_CART,INCREASE_CART_ITEM_QUANTITY,DECREASE_CART_ITEM_QUANTITY } from "./ActionTypes"


export const addToCart = (cartItem) => ({
        type: ADD_TO_CART,
        payload: cartItem
    }
)

export const removeFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    payload: id
}
)
export const increaseCartItemQuantity = (id) => ({
    type: INCREASE_CART_ITEM_QUANTITY,
    payload: id
}
)

export const decreaseCartItemQuantity = (id) => ({
type: DECREASE_CART_ITEM_QUANTITY,
payload: id
}
)