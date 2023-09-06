import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', background: '#f4f4f4' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>Home</Link>
      <Link to="/products" style={{ textDecoration: 'none', color: '#333' }}>Products</Link>
      <Link to="/cart" style={{ textDecoration: 'none', color: '#333' }}>Cart</Link>
      {/* Add more links as needed */}
    </nav>
  );
};

export default NavBar;
