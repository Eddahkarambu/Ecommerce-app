import { TOGGLE_CATEGORY } from "../Actions/ActionTypes";

const initialState = {
  category: "",
};

export const category = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CATEGORY: {
      const category = action.payload;
      return {
        ...state,
        category,
      };
    }
    default:
      return state;
  }
};
