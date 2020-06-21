export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CHECK_PRODUCT = "CHECK_PRODUCT";
const productsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];
    case DELETE_PRODUCT:
      return state.filter((product) => {
        if (product.id !== action.payload) {
          return state;
        }
      });
    case CHECK_PRODUCT:
      return state.filter((product) => {
        if (product.id === action.payload) {
          return product.name;
        }
      });

    default:
      return state;
  }
};

export default productsReducer;
