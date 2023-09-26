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
import InvoicePage from './InvoicePage';
import { AppStateProvider, useAppState } from './AppStateContext';

function AlertPopup() {
  const { alert, setAlert } = useAppState();
  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => setAlert(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [alert, setAlert]);
  return alert ? <div style={{ position: 'fixed', top: 0, right: 0, background: 'red', color: 'white', padding: '10px' }}>{alert}</div> : null;
}

function App() {
  useEffect(() => {
    netlifyIdentity.init({});
    netlifyIdentity.on('signup', user => alert('Registration successful!'));
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
          <Route path="/invoice/:invoiceId" element={<InvoicePage />} /> {/* Updated Route */}
        </Routes>
        <AlertPopup />
      </AppStateProvider>
    </Router>
  );
}

export default App;
