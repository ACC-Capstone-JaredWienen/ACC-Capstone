import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppState } from './AppStateContext';

const CartPage = () => {
  const { cart, addToCart, removeFromCart, decreaseQuantity } = useAppState();
  const [productsDetails, setProductsDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all(cart.map(item => fetch(`https://fakestoreapi.com/products/${item.productId}`)
      .then(res => res.json())
    )).then(products => setProductsDetails(products));
  }, [cart]);

  const handleCheckout = () => {
    // Updated to navigate to CheckoutPage instead of InvoicePage
    navigate('/checkout'); // Redirect to the CheckoutPage when Checkout button is clicked
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cart.map(item => {
          const product = productsDetails.find(p => p.id === item.productId);
          return (
            <li key={item.productId}>
              {product ? product.title : 'Loading...'} - Quantity: {item.quantity}
              <button onClick={() => addToCart(item.productId)}>+</button>
              <button onClick={() => decreaseQuantity(item.productId)}>-</button>
              <button onClick={() => removeFromCart(item.productId)}>Remove</button>
            </li>
          );
        })}
      </ul>
      {cart.length > 0 && <button onClick={handleCheckout}>Checkout</button>}
    </div>
  );
};

export default CartPage;
