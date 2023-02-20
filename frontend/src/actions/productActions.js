import * as product from "../actionTypes/ProductsActionTypes";

export const productRequestAction = () => {
  return {
    type: product.productListRequest,
  };
};

export const productSuccessAction = (product) => {
  return {
    type: product.productListSuccess,
    payload: product,
  };
};

export const productFailAction = (error) => {
  return {
    type: product.productListFail,
    payload: error,
  };
};
