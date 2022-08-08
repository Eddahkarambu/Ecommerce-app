import { combineReducers } from "redux";
import { currency } from "./Currency";
import { category } from "./Category";
import { cart } from "./Cart";

export default combineReducers({ currency, category, cart });
