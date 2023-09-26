import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppState } from './AppStateContext';

const CartPage = () => {
  const { cart, addToCart, removeFromCart, decreaseQuantity } = useAppState();
  const [productsDetails, setProductsDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (cart.length > 0) {
      Promise.all(cart.map(item => fetch(`https://fakestoreapi.com/products/${item.productId}`)
        .then(res => res.json())
      )).then(products => setProductsDetails(products));
    }
  }, [cart]);

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const getTotalAmount = () => {
    return cart.reduce((acc, currentItem) => {
      const product = productsDetails.find(p => p.id === currentItem.productId);
      if (product) {
        return acc + (product.price * currentItem.quantity);
      }
      return acc;
    }, 0);
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cart.map(item => {
          const product = productsDetails.find(p => p.id === item.productId);
          return (
            <li key={item.productId}>
              {product ? (
                <>
                  {product.title} - ${product.price.toFixed(2)} each - Quantity: {item.quantity}
                </>
              ) : 'Loading...'}
              <button onClick={() => addToCart(item.productId)}>+</button>
              <button onClick={() => decreaseQuantity(item.productId)}>-</button>
              <button onClick={() => removeFromCart(item.productId)}>Remove</button>
            </li>
          );
        })}
      </ul>
      {cart.length > 0 && (
        <>
          <p>Total Amount: ${getTotalAmount().toFixed(2)}</p>
          <button onClick={handleCheckout}>Checkout</button>
        </>
      )}
      {cart.length === 0 && <p>Your cart is empty. Add some products to proceed.</p>}
    </div>
  );
};

export default CartPage;
