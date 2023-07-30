import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "./actionTypes/ProductsActionTypes";
import CartScreen from "./Screens/CartScreen";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        dispatch({ type: actionTypes.productListRequest });
        const { data } = await axios.get("https://lightupdevcommerce-backend.onrender.com/api/products");
        dispatch({ type: actionTypes.productListSuccess, payload: data });
      } catch (error) {
        dispatch({ type: actionTypes.productListFail, payload: error });
      }
    };
    fetchProducts();
  }, [dispatch]);

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  if (products.loading) {
    return <div className="text-center">Loading...</div>;
  }
  if (products.error) {
    return <div className="text-center">{products.error.message}</div>;
  } else {
    return (
      <BrowserRouter>
        <div className="div-container">
          <header className="header">
            <div className="brand">
              <button onClick={openMenu}>&#9776;</button>
              <Link to="/">Amazona</Link>
            </div>
            <div className="header-links">
              <Link to="/cart">Cart</Link>
              <Link to="/sign-in">Sign In</Link>
            </div>
          </header>
          <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button onClick={closeMenu}>&times;</button>
            <ul>
              <li>
                <Link to="index.html">Pants</Link>
              </li>
              <li>
                <Link to="index.html">Shirts</Link>
              </li>
            </ul>
          </aside>
          <main className="main" onClick={closeMenu}>
            <div className="content">
              <Route path="/product/:id" exact={true}>
                <ProductScreen products={products.product} />
              </Route>
              <Route path="/" exact={true}>
                <HomeScreen products={products.product} />
              </Route>
              <Route path="/cart/:id?" exact={true}>
                <CartScreen products={products.product} />
              </Route>
            </div>
          </main>
          <footer className="footer"> All right reserved</footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
