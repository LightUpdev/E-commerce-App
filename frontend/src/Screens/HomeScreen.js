import React from "react";
import products from "../data";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <ul className="products">
      {products.map((product) => {
        const { id, name, brand, price, rating, reviews, image } = product;
        return (
          <li key={id}>
            <div className="product">
              <Link to={`/product/${id}`}>
                {" "}
                <img className="product-image" src={image} alt={name} />
              </Link>
              <div className="product-name">
                <Link to={`/product/${id}`}>{name}</Link>{" "}
              </div>
              <div className="product-brand">{brand}</div>
              <div className="product-price">${price}</div>
              <div className="product-rating">
                {rating} Stars ({reviews} Reviews)
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default HomeScreen;
