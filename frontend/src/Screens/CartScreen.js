import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { REMOVE_FROM_CART } from "../actionTypes/cartActionType";

function CartScreen(products) {
  const history = useHistory();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.carts);
  const removeFromCart = (id) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: cartItems.filter((a) => a.id !== id),
    });
  };

  return (
    <div className="p-5">
      <div className="cart-container">
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <div className="cart-details">
              <div className="heading">
                <h2 className="fw-bold py-3">Shopping Cart</h2>
              </div>
              {cartItems.length > 0 ? (
                <table className="table">
                  <thead>
                    <tr className="justify-content-between">
                      <th className=""></th>
                      <th className=" ">Price</th>
                      <th className=" ">Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.length > 0 ? (
                      cartItems.map((item) => {
                        const { id, image, name, qty, countInStock, price } =
                          item;
                        return (
                          <tr key={id}>
                            <td className="">
                              <div className="d-flex">
                                <img
                                  src={`/${image}`}
                                  alt="product-img"
                                  width="100"
                                  className="img-fluid"
                                />
                                <div className="product-info">
                                  <h3>{name}</h3>
                                  <p>
                                    Qty:
                                    <select
                                      name="qty"
                                      id="qty"
                                      value={qty}
                                      onChange={(e) => e.target.value}>
                                      {[...Array(countInStock).keys()].map(
                                        (x) => (
                                          <option key={x} value={x + 1}>
                                            {x + 1}
                                          </option>
                                        )
                                      )}
                                    </select>
                                  </p>
                                </div>

                                <div className="my-auto mx-3">
                                  <button
                                    className="btn btn-danger"
                                    onClick={() => removeFromCart(id)}>
                                    Delete
                                  </button>
                                </div>
                              </div>
                            </td>
                            <td>
                              <b className="my-5">${price}</b>
                            </td>
                            <td>
                              <b className="my-5">${price * qty}</b>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <>
                        <div className="text-center justify-content-center">
                          <h3>Go to shopping page</h3>
                          <button
                            className="btn btn-lg btn-warning"
                            type="button"
                            onClick={() => history.push("/")}>
                            Shopping
                          </button>
                        </div>
                      </>
                    )}
                  </tbody>
                </table>
              ) : (
                <>
                  <div className="text-center justify-content-center">
                    <h3>Go to shopping page</h3>
                    <button
                      className="btn btn-lg btn-warning"
                      type="button"
                      onClick={() => history.push("/")}>
                      Shopping
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="cart-action p-5 d-flex mx-auto">
              <div className="heading d-grid">
                <h2 className="fw-bold float-end px-5">
                  Total Quantity:
                  <span className="mx-2">
                    {cartItems.reduce((a, c) => {
                      return a + c.qty;
                    }, 0)}
                  </span>
                </h2>
                <h2 className="fw-bold float-end px-5">
                  No of Items in Cart:
                  <span className="mx-2">{cartItems.length}</span>
                </h2>
                <h2 className="fw-bold float-end px-5">
                  Subtotal:
                  <span className="mx-3">
                    {cartItems.reduce((a, c) => {
                      return a + c.qty * c.price;
                    }, 0)}
                  </span>
                </h2>
                <button
                  className="btn btn-warning fs-5 fw-bold py-3 my-3"
                  disabled={cartItems.length === 0}>
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartScreen;
