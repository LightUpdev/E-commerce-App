import * as cartActions from "../actionTypes/cartActionType";

export const AddToCart = (items) => {
  return {
    type: cartActions.ADD_TO_CART,
    payload: items,
  };
};
export const RemoveFromCart = (productId) => {
  return {
    type: cartActions.REMOVE_FROM_CART,
    payload: productId,
  };
};
