import { ADD_PRODUCT } from "../actions/types";

export const addProduct = (products) => (dispatch) => {
  dispatch({
    type: ADD_PRODUCT,
    payload: products,
  });
};
