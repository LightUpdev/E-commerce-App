import productReducer from "./reducer/productReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import CartReducer from "./reducer/cartReducer";

const reducers = combineReducers({
  products: productReducer,
  carts: CartReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
