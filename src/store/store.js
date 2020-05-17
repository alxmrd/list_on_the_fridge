import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import rootReducer from "./reducers";

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middleware)
    // window.navigator.userAgent.includes("Chrome")
    //   ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //       window.__REDUX_DEVTOOLS_EXTENSION__()
    //   : compose
  )
);

export default store;
