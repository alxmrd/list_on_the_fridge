import { ADD_PRODUCT } from "../actions/types";
import { DELETE_PRODUCT } from "../actions/types";
import { CHECK_PRODUCT } from "../actions/types";
let productId = 0;
export const addProduct = (products) => (dispatch) => {
  dispatch({
    type: ADD_PRODUCT,

    payload: { name: products, id: productId++ },
  });
};

export const deleteProduct = (id) => (dispatch) => {
  dispatch({
    type: DELETE_PRODUCT,

    payload: id,
  });
};

export const checkProduct = (id) => (dispatch) => {
  dispatch({
    type: CHECK_PRODUCT,

    payload: id,
  });
};
