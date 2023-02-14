import data from "../data";
import { Link } from "react-router-dom";

const ProductScreen = (props) => {
  const product = data.find((product) => {
    return product.id === Number(props.match.params.id);
  });
  const { name, price, image, brand, category, reviews, rating, status } =
    product;
  return (
    <div>
      <div className="back-home-btn">
        <Link to="/">View all products</Link>
      </div>
      <div className="details">
        <div className="product-image">
          <img src={`../${image}`} alt={name} className="img-fluid" />
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
              <b>Price: {price}</b>
            </li>
            <li>
              <b>Description:</b>{" "}
            </li>
          </ul>
        </div>
        <div className="product-action">
          <ul>
            <li>
              <b>Price:</b> {price}
            </li>
            <li>
              <b>Status:</b>
              {status}
            </li>
            <li>
              <b>Quantity:</b>{" "}
              <select name="product-qty" id="product-qty">
                <option value="quantity">quantity</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </li>
            <li>
              <button className="action-btn">Add to Cart</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
