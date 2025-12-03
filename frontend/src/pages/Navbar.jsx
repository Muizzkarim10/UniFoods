import React, { useRef } from "react";
import { Link } from "react-router-dom"; // ✅ import Link
import Logo from "../assets/images/Logo.png";
import { cart } from "../Data";

const Navbar = () => {
  const searchRef = useRef();
  const cartRef = useRef();
  const navbarRef = useRef();

  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
    cartRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };

  const cartHandler = () => {
    cartRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };

  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };

  return (
    <header className="header">
      {/* Logo */}
      <Link to="/" className="logo">
        <img src={Logo} alt="CampusEats Logo" />
      </Link>

      {/* Navigation */}
      <nav className="navbar" ref={navbarRef}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/products">Products</Link>
        <Link to="/review">Review</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blogs">Blogs</Link>
      </nav>

      {/* Top-right icons */}
      <div className="icons">
        <div className="fas fa-search" onClick={searchHandler}></div>
        <div className="fas fa-shopping-cart" onClick={cartHandler}></div>
        <div className="fas fa-bars" id="menu-btn" onClick={navbarHandler}></div>
      </div>

      {/* Search bar */}
      <div className="search-form" ref={searchRef}>
        <input
          type="search"
          placeholder="Search for dishes or restaurants..."
          id="search-box"
        />
        <label htmlFor="search-box" className="fas fa-search"></label>
      </div>

      {/* Cart items */}
      <div className="cart-items-container" ref={cartRef}>
        {cart.map((item, index) => (
          <div className="cart-item" key={index}>
            <span className="fas fa-times"></span>
            <img src={item.img} alt={item.name} />
            <div className="content">
              <h3>{item.name}</h3>
              <div className="price">${item.price}/-</div>
            </div>
          </div>
        ))}
        <Link className="btn" to="/checkout">
          Checkout Now
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
