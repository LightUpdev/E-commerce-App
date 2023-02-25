import * as cartActions from "../actionTypes/cartActionType";

export const AddToCart = (items, qty) => {
  return {
    type: cartActions.ADD_TO_CART,
    payload: { items, qty },
  };
};
export const RemoveFromCart = (productId) => {
  return {
    type: cartActions.REMOVE_FROM_CART,
    payload: productId,
  };
};
