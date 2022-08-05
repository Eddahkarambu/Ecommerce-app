import { TOGGLE_CURRENCY } from "./ActionTypes"
import {getTotal} from "./Cart"


export const changeCurrencyActions = (currency) => ({
    type: TOGGLE_CURRENCY,
    payload: currency
})

export const changeCurrency = (currency) => {
    return async (dispatch) => {
        await dispatch(changeCurrencyActions(currency))
        dispatch(getTotal())
    }
}





