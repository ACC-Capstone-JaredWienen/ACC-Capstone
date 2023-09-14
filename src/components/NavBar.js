import React from 'react';
import { Link } from 'react-router-dom';
import { useAppState } from './AppStateContext';

const NavBar = () => {
  const { isLoggedIn, logout } = useAppState();

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#f4f4f4' }}>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Link to="/">Home</Link>
        <Link to="/products">All Products</Link>
        <Link to="/products?category=electronics">Electronics</Link>
        <Link to="/products?category=jewelery">Jewelry</Link>
        <Link to="/products?category=mens-clothing">Men's Clothing</Link>
        <Link to="/products?category=womens-clothing">Women's Clothing</Link>
        <Link to="/cart">Cart</Link>
      </div>
      
      <div style={{ display: 'flex', gap: '10px' }}>
        {!isLoggedIn && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
        {isLoggedIn && (
          <>
            <Link to="/profile">Profile</Link>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
