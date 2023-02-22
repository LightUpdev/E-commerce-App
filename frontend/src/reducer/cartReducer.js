import * as cartActionType from "../actionTypes/cartActionType";

const CartReducer = (state = [], action) => {
  switch (action.type) {
    case cartActionType.ADD_TO_CART:
      return [
        ...state,
         action.payload,
      ];

    default:
      return state;
  }
};

export default CartReducer;
