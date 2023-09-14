import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- updated this line

const AppStateContext = createContext();

export const AppStateProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // <-- updated this line

  useEffect(() => {
    fetch('https://fakestoreapi.com/carts/user/2')
      .then(res => res.json())
      .then(data => {
        if (data && data.length) {
          setCart(data[0].products);
        }
      });
  }, []);

  const addToCart = (productId, quantity = 1) => {
    const existingProduct = cart.find(item => item.productId === productId);
    let updatedCart;
    if (existingProduct) {
      updatedCart = cart.map(item =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      updatedCart = [...cart, { productId, quantity }];
    }
    updateBackendCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.productId !== productId);
    updateBackendCart(updatedCart);
  };

  const decreaseQuantity = (productId) => {
    const existingProduct = cart.find(item => item.productId === productId);
    let updatedCart;
    if (existingProduct && existingProduct.quantity > 1) {
      updatedCart = cart.map(item =>
        item.productId === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    } else {
      updatedCart = cart.filter(item => item.productId !== productId);
    }
    updateBackendCart(updatedCart);
  };

  const updateBackendCart = (updatedCart) => {
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

  const logout = () => {
    setIsLoggedIn(false);
    navigate('/'); // <-- updated this line
  };

  return (
    <AppStateContext.Provider value={{ cart, addToCart, removeFromCart, decreaseQuantity, isLoggedIn, setIsLoggedIn, logout }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => useContext(AppStateContext);
