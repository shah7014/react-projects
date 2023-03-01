import { ACTION_TYPES } from "../constants/actionTypes";

export const setAllProducts = (products) => ({
  type: ACTION_TYPES.SET_ALL_PRODUCTS,
  payload: products,
});

export const setCurrentProduct = (product) => ({
  type: ACTION_TYPES.SET_CURRENT_PRODUCT,
  payload: product,
});

export const removeCurrentProduct = () => {
  return {
    type: ACTION_TYPES.REMOVE_CURRENT_PRODUCT,
  };
};
