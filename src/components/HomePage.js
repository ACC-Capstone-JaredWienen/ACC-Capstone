import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to our Online Store!</h1>
      <p>Filter by Category:</p>
      <ul>
        <li><Link to="/products?category=electronics">Electronics</Link></li>
        <li><Link to="/products?category=clothing">Clothing</Link></li>
        <li><Link to="/products?category=home-kitchen">Home & Kitchen</Link></li>
        <li><Link to="/products?category=books">Books</Link></li>
        <li><Link to="/products?category=toys">Toys</Link></li>
      </ul>
      {/* Add other introductory or promotional material here */}
    </div>
  );
};

export default HomePage;
