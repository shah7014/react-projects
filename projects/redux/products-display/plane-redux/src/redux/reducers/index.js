import { combineReducers } from "redux";
import { allProductsReducer, productReducer } from "./productReducer";

const reducers = combineReducers({
  allProducts: allProductsReducer,
  product: productReducer,
});

export default reducers;
