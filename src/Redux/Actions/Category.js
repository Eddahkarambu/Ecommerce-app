import { TOGGLE_CATEGORY } from "./ActionTypes"


export const changeCategory = (category) => ({
        type: TOGGLE_CATEGORY,
        payload: category
    }
)
