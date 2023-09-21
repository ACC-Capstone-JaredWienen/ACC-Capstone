import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import netlifyIdentity from 'netlify-identity-widget';
import NavBar from './NavBar';
import HomePage from './HomePage';
import ProductsPage from './ProductsPage';
import ProductDetailPage from './ProductDetailPage';
import CartPage from './CartPage';
import UserLoginPage from './UserLoginPage';
import UserProfilePage from './UserProfilePage';
import CheckoutForm from './CheckoutForm';
import { AppStateProvider } from './AppStateContext';

function App() {

  useEffect(() => {
    netlifyIdentity.init({});

    netlifyIdentity.on('signup', user => {
      alert('Registration successful!');
    });

  }, []);

  const handleLogin = () => netlifyIdentity.open('login');
  const handleSignup = () => netlifyIdentity.open('signup');
  const handleLogout = () => netlifyIdentity.logout();

  return (
    <Router>
      <AppStateProvider>
        <NavBar handleLogin={handleLogin} handleSignup={handleSignup} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/login" element={<UserLoginPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
        </Routes>
      </AppStateProvider>
    </Router>
  );
}

export default App;
