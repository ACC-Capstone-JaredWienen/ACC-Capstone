// ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppState } from './AppStateContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useAppState();

  return (
    <div>
      <h2><Link to={`/product/${product.id}`}>{product.title}</Link></h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product.id)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
