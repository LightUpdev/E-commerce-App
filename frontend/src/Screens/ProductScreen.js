import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import * as cartActionType from "../actionTypes/cartActionType";
import Cookies from "js-cookie";

const ProductScreen = ({ products }) => {
  const [qty, setQty] = useState(1);
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const product = products.find((product) => {
    return product.id === Number(location.pathname.split("/")[2]);
  });

  const {
    id,
    name,
    price,
    image,
    brand,
    category,
    reviews,
    rating,
    status,
    countInStock,
  } = product;
  const carts = useSelector((state) => state.carts);

  const handleAddToCart = () => {
    dispatch({
      type: cartActionType.ADD_TO_CART,
      payload: { ...product, qty },
    });
    Cookies.set("cartItems", carts);
    history.push(`/cart/${id}?qty=${qty}`);
  };
  console.log(carts);
  return (
    <div>
      <div className="back-home-btn">
        <Link to="/">View all products</Link>
      </div>
      <div className="details">
        <div className="product-image">
          <img src={`/${image}`} alt={name} className="img-fluid" />
        </div>
        <div className="about-product">
          <h2>{name}</h2>
          <ul>
            <li>
              <b>Category:</b> {category}
            </li>
            <li>
              <b>Brand:</b> {brand}
            </li>
            <li>
              <b>Rating:</b> {rating} Stars ({reviews} Reviews)
            </li>
            <li>
              <b>Price: ${price}</b>
            </li>
            <li>
              <b>Description:</b>
            </li>
          </ul>
        </div>
        <div className="product-action">
          <ul>
            <li>
              <b>Price:</b> ${price}
            </li>
            <li>
              <b>Status:{countInStock ? " In Stock" : "Unavailable"}</b>
              {status}
            </li>
            <li>
              <b>Quantity:</b>
              {countInStock ? (
                <select
                  name="product-qty"
                  id="product-qty"
                  value={qty}
                  onChange={(e) => {
                    setQty(Number(e.target.value));
                  }}>
                  {[...Array(countInStock).keys()].map((x) => (
                    <option value={x + 1} key={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              ) : null}
            </li>
            <li>
              {countInStock ? (
                <button
                  onClick={() => handleAddToCart(id)}
                  className="action-btn">
                  Add to Cart
                </button>
              ) : null}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
