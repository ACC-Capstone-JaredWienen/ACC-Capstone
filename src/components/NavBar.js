import React from 'react';
import { Link } from 'react-router-dom';
import { useAppState } from './AppStateContext';

const NavBar = () => {
  const { isLoggedIn, logout } = useAppState(); // Use the useAppState hook directly

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#f4f4f4' }}>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>Home</Link>
        <Link to="/products" style={{ textDecoration: 'none', color: '#333' }}>All Products</Link>
        <Link to="/products?category=electronics" style={{ textDecoration: 'none', color: '#333' }}>Electronics</Link>
        <Link to="/products?category=jewelery" style={{ textDecoration: 'none', color: '#333' }}>Jewelry</Link>
        <Link to="/products?category=mens-clothing" style={{ textDecoration: 'none', color: '#333' }}>Men's Clothing</Link>
        <Link to="/products?category=womens-clothing" style={{ textDecoration: 'none', color: '#333' }}>Women's Clothing</Link>
        <Link to="/cart" style={{ textDecoration: 'none', color: '#333' }}>Cart</Link>
      </div>
      
      <div style={{ display: 'flex', gap: '10px' }}>
        {!isLoggedIn && (
          <>
            <Link to="/login" style={{ textDecoration: 'none', color: '#333' }}>Login</Link>
            <Link to="/signup" style={{ textDecoration: 'none', color: '#333' }}>Sign Up</Link>
          </>
        )}
        {isLoggedIn && (
          <>
            <Link to="/profile" style={{ textDecoration: 'none', color: '#333' }}>Profile</Link>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
