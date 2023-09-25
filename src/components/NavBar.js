import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppState } from './AppStateContext';

const NavBar = ({ handleLogin, handleSignup, handleLogout }) => {
    const { isLoggedIn } = useAppState();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <>
            <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#f4f4f4' }}>
                <div onMouseOver={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                    <button className="menu-button">Menu</button>
                    {dropdownOpen && (
                        <div className="dropdown">
                            <Link to="/">Home</Link>
                            <Link to="/products">All Products</Link>
                            <Link to="/products?category=electronics">Electronics</Link>
                            <Link to="/products?category=jewelery">Jewelry</Link>
                            <Link to="/products?category=mens-clothing">Men's Clothing</Link>
                            <Link to="/products?category=womens-clothing">Women's Clothing</Link>
                        </div>
                    )}
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                    {!isLoggedIn && (
                        <>
                            <button onClick={handleLogin}>Login</button>
                            <button onClick={handleSignup}>Sign Up</button>
                        </>
                    )}
                    {isLoggedIn && (
                        <>
                            <Link to="/profile">Profile</Link>
                            <button onClick={handleLogout}>Logout</button>
                        </>
                    )}
                </div>
            </nav>
            <div className="persistent-cart">
                <Link to="/cart">Cart</Link>
            </div>
        </>
    );
};

export default NavBar;
