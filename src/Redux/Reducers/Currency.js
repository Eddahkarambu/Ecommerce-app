import { TOGGLE_CURRENCY } from "../Actions/ActionTypes";

const initialState = {
  currency: "",
};

export const currency = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CURRENCY: {
      const currency = action.payload;
      return {
        ...state,
        currency,
      };
    }
    default:
      return state;
  }
};
