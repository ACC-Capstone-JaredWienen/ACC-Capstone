import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook instead of useHistory
import { useAppState } from './AppStateContext';

const CartPage = () => {
  const { cart, addToCart, removeFromCart, decreaseQuantity } = useAppState();
  const [productsDetails, setProductsDetails] = useState([]);
  const navigate = useNavigate();  // Instantiate the useNavigate hook

  useEffect(() => {
    Promise.all(cart.map(item => fetch(`https://fakestoreapi.com/products/${item.productId}`)
      .then(res => res.json())
    )).then(products => setProductsDetails(products));
  }, [cart]);

  const handleCheckout = () => {
    navigate('/checkout');  // Redirects user to the '/checkout' route using the new navigate function
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
      {/* Add a Checkout button */}
      {cart.length > 0 && <button onClick={handleCheckout}>Checkout</button>}
    </div>
  );
};

export default CartPage;
