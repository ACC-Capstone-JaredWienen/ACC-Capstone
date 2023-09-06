import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './HomePage';
import ProductsPage from './ProductsPage';
import ProductDetailPage from './ProductDetailPage';
import CartPage from './CartPage';
import UserLoginPage from './UserLoginPage';
import UserProfilePage from './UserProfilePage';
import CategoryFilter from './CategoryFilter';

function App() {
  return (
    <Router>
      <NavBar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<UserLoginPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
        </Routes>
      </div>
      <CategoryFilter />
    </Router>
  );
}

export default App;
