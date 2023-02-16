import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const fetchProducts = () =>
    axios
      .get("api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  useEffect(() => {
    fetchProducts();
  }, []);

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
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
              <ProductScreen products={products} />
            </Route>
            <Route path="/" exact={true}>
              <HomeScreen products={products} />
            </Route>
          </div>
        </main>
        <footer className="footer"> All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
