import * as productActionType from "../actionTypes/ProductsActionTypes";

const initialState = {
  loading: false,
  product: [],
  error: "",
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productActionType.productListRequest:
      return {
        ...state,
        loading: true,
      };
    case productActionType.productListSuccess:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };

    case productActionType.productListFail:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
