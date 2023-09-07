import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', background: '#f4f4f4' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>Home</Link>
      
      {/* Dropdown or Submenu might be better for a real-world application, but for simplicity, let's use direct links */}
      <Link to="/products" style={{ textDecoration: 'none', color: '#333' }}>All Products</Link>
      <Link to="/products?category=electronics" style={{ textDecoration: 'none', color: '#333' }}>Electronics</Link>
      <Link to="/products?category=jewelery" style={{ textDecoration: 'none', color: '#333' }}>Jewelery</Link>
      <Link to="/products?category=mens-clothing" style={{ textDecoration: 'none', color: '#333' }}>Men's Clothing</Link>
      <Link to="/products?category=womens-clothing" style={{ textDecoration: 'none', color: '#333' }}>Women's Clothing</Link>
      
      <Link to="/cart" style={{ textDecoration: 'none', color: '#333' }}>Cart</Link>
      {/* Add more links as needed */}
    </nav>
  );
};

export default NavBar;
