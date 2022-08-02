import { TOGGLE_CURRENCY } from "./ActionTypes"


export const changeCurrency = (currency) => ({
        type: TOGGLE_CURRENCY,
        payload: currency
})

