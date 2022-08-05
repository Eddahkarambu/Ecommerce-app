import { ADD_TO_CART,REMOVE_FROM_CART,INCREASE_CART_ITEM_QUANTITY,DECREASE_CART_ITEM_QUANTITY, GET_TOTAL } from "./ActionTypes"
import store from "../store";

export  const addToCart = (cartItem) =>  ({
        type: ADD_TO_CART,
        payload: cartItem
    }
)

export const removeFromCart = (id) => {
    return async (dispatch) => {
        await dispatch(removeFromCartAction(id))
       dispatch(getTotal());
    }
}
const increaseCartItemQuantityAction = (id) => ({
    type: INCREASE_CART_ITEM_QUANTITY,
    payload: id
}
)

const decreaseCartItemQuantityAction = (id) => ({
type: DECREASE_CART_ITEM_QUANTITY,
payload: id
}
)

const removeFromCartAction = (id) => ({
    type: REMOVE_FROM_CART,
    payload: id
}
)
export const increaseCartItemQuantity = (id) => {
    return async (dispatch) => {
        await dispatch(increaseCartItemQuantityAction(id));
        dispatch(getTotal())

    }
}

export const decreaseCartItemQuantity = (id) => {
    return async (dispatch) => {
        await dispatch(decreaseCartItemQuantityAction(id))
        dispatch(getTotal())
    }
}

export const getTotal = () => {
    const {currency} = store.getState().currency
    return {
        type: GET_TOTAL,
        payload: currency
    }
}

export const AddToCartAndCalcTotal = (cartItem) => {
    return async (dispatch) => {
        await dispatch(addToCart(cartItem))
        dispatch(getTotal())
    }

}