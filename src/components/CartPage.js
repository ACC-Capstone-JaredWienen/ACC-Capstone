import React, { useState, useEffect } from 'react';

const CartPage = () => {
  // You would typically have a user ID from login/session, for now, I'm hardcoding as 1
  const userId = 1;

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/carts?userId=${userId}`)
      .then(res => res.json())
      .then(data => {
        if (data.length) setCartItems(data[0].products);
      });
  }, [userId]);

  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.productId}>
            Product ID: {item.productId} | Quantity: {item.quantity}
            {/* Here you might want to fetch product details to show more information, like product name, image, etc. */}
          </li>
        ))}
      </ul>
      {/* You can also show Total Amount, Checkout button, etc. */}
    </div>
  );
};

export default CartPage;
