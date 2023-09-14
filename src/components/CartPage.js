// CartPage.js
import React from 'react';
import { useAppState } from './AppStateContext';

const CartPage = () => {
  const { cart } = useAppState();

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.productId}>
            Product ID: {item.productId}, Quantity: {item.quantity}
            {/* Here, you might want to fetch additional product details like name, price, etc. */}
            {/* You can also add buttons to increase/decrease quantity or remove from cart. */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
