import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to our Online Store!</h1>
      <p>Browse Categories:</p>
      <ul>
        <li><Link to="/products">All Products</Link></li>
        <li><Link to="/products?category=electronics">Electronics</Link></li>
        <li><Link to="/products?category=jewelery">Jewelry</Link></li>
        <li><Link to="/products?category=mens-clothing">Men's Clothing</Link></li>
        <li><Link to="/products?category=womens-clothing">Women's Clothing</Link></li>
        <li><Link to="/login">User Login</Link></li>
        <li><Link to="/profile">User Profile</Link></li>
      </ul>
      {/* Add other introductory or promotional material here */}
    </div>
  );
};

export default HomePage;
