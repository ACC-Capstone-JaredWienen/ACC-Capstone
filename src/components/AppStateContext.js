// AppStateContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const AppStateContext = createContext();

export const AppStateProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch the cart data for a given user when the app initializes
    // Here I'm assuming user ID is 2 for demo purposes. You'd fetch the appropriate user's cart.
    fetch('https://fakestoreapi.com/carts/user/2')
      .then(res => res.json())
      .then(data => {
        if (data && data.length) {
          // Assuming we take the first cart for this user
          setCart(data[0].products);
        }
      });
  }, []);

  const addToCart = (productId, quantity = 1) => {
    const existingProduct = cart.find(item => item.productId === productId);

    let updatedCart;
    if (existingProduct) {
      // Increase quantity if the product already exists in the cart
      updatedCart = cart.map(item =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      // Add the new product to the cart
      updatedCart = [...cart, { productId, quantity }];
    }

    // Sync the cart with the backend
    // Here I'm assuming cart ID is 5 for demo purposes. In a real scenario, you'd use the appropriate cart ID.
    fetch('https://fakestoreapi.com/carts/5', {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: 2,
        products: updatedCart
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data && data.products) {
          setCart(data.products);
        }
      });
  };

  return (
    <AppStateContext.Provider value={{ cart, addToCart }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => useContext(AppStateContext);
