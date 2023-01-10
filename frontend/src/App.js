import './App.css';
import { BrowserRouter , Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {
  const openMenu =()=>{
    document.querySelector('.sidebar').classList.add('open');
  }
  const closeMenu =()=>{
    document.querySelector('.sidebar').classList.remove('open');
  }
  return (
    <BrowserRouter>
    <div className="div-container">
    <header className="header">
        <div className="brand">
            <button onClick={openMenu}>
                &#9776;
            </button>
            <a href="index.html">Amazona</a>
        </div>
        <div className="header-links">
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a>
        </div>
    </header>
    <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button onClick={closeMenu}>&times;</button>
        <ul>
          <li><a href="index.html">Pants</a></li>  
          <li><a href="index.html">Shirts</a></li>  
        </ul>
    </aside>
    <main className="main" onClick={closeMenu}>
        <div className="content">
        <Route path='/product/:id' exact={true} component={ProductScreen} /> 
          <Route path='/' exact={true} component={HomeScreen} /> 

       
    </div>
    </main>
    <footer className="footer"> All right reserved</footer>
</div>
</BrowserRouter>
  );
}

export default App;
