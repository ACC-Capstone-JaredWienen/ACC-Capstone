import React, { useState, useRef, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import { useAppState } from './AppStateContext';

const NavBar = ({ handleLogin, handleSignup, handleLogout }) => {
    const { isLoggedIn } = useAppState();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#f4f4f4' }}>
                <div ref={dropdownRef}>
                    <button className="menu-button" onClick={() => setDropdownOpen(!dropdownOpen)}>Menu</button>
                    {dropdownOpen && (
                        <div className="dropdown">
                            <Link to="/" onClick={() => setDropdownOpen(false)}>Home</Link>
                            <Link to="/products" onClick={() => setDropdownOpen(false)}>All Products</Link>
                            <Link to="/products?category=electronics" onClick={() => setDropdownOpen(false)}>Electronics</Link>
                            <Link to="/products?category=jewelery" onClick={() => setDropdownOpen(false)}>Jewelry</Link>
                            <Link to="/products?category=mens-clothing" onClick={() => setDropdownOpen(false)}>Men's Clothing</Link>
                            <Link to="/products?category=womens-clothing" onClick={() => setDropdownOpen(false)}>Women's Clothing</Link>
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
