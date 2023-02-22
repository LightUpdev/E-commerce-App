import * as cartActions from "../actionTypes/cartActionType";

export const AddToCart = (items) => {
  return {
    type: cartActions.ADD_TO_CART,
    payload: items,
  };
};
