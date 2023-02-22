import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function CartScreen(products) {
  const cartItems = useSelector((state) => state.carts);
  const location = useLocation();
  const itemQty = location.search.split('=')[1]
  var object = cartItems.reduce((obj, item) => ({...obj, [item.key]: item.value}) ,{});
  console.log(object);
  console.log(itemQty);
  console.log(location);
  console.log(cartItems);
  return (
    <div className="p-5">
      <div className="cart-container">
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <div className="cart-details">
              <div className="heading">
                <h2 className="fw-bold py-3">Shopping Cart</h2>
              </div>
              <table className="table">
                <thead>
                  <tr className="justify-content-between">
                    <th className=""></th>
                    <th className="float-end ">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => {
                    const { id,image, name, qty, countInStock, price} = item;
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
                              <div>
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
                                        <option key={x} value={x + 1}>{x + 1}</option>
                                      )
                                    )}
                                  </select>
                                </p>
                              </div>
                            </div>
                          </td> 
                          <td className="float-end my-5">
                            <b>${price}</b>
                          </td>
                        </tr>
                      
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="cart-action">
              <div className="heading d-grid">
                <h2 className="fw-bold float-end px-5">
                  Subtotal
                  <span>(05 items): {cartItems.map((itemQty)=> {
                    const {qty} = itemQty
                     const values = Object.values(qty)
                     const sum = values.reduce((accumulator, value) => {
                      return accumulator + value;
                    }, 0);
                    return sum
                  })}</span>
                </h2>
                <button className="btn btn-warning fs-5 fw-bold w-50 py-3 my-3 ms-5">
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
