export const ADD_PRODUCT = "ADD_PRODUCT";

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default productsReducer;
