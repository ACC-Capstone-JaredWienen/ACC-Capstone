import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './HomePage';
import ProductsPage from './ProductsPage';
import ProductDetailPage from './ProductDetailPage';
import CartPage from './CartPage';
import UserLoginPage from './UserLoginPage';
import UserProfilePage from './UserProfilePage';
import SignUpPage from './SignUpPage'; 
import CheckoutForm from './CheckoutForm';  // Don't forget to create this component!
import { AppStateProvider } from './AppStateContext';

function App() {
  return (
    <AppStateProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutForm />} /> {/* Added the /checkout route */}
          <Route path="/login" element={<UserLoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
        </Routes>
      </Router>
    </AppStateProvider>
  );
}

export default App;
