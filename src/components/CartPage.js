import React, { useState, useEffect } from 'react';
import { useAppState } from './AppStateContext';

const CartPage = () => {
  const { cart, addToCart, removeFromCart, decreaseQuantity } = useAppState();
  const [productsDetails, setProductsDetails] = useState([]);

  useEffect(() => {
    // Fetch product details for all productIds in the cart
    Promise.all(cart.map(item => fetch(`https://fakestoreapi.com/products/${item.productId}`)
      .then(res => res.json())
    )).then(products => setProductsDetails(products));
  }, [cart]);

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
    </div>
  );
};

export default CartPage;
