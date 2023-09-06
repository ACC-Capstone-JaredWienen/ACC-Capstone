import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div>
      <h2><Link to={`/product/${product.id}`}>{product.title}</Link></h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>${product.price}</p>
      {/* Add to cart button and other controls can go here */}
    </div>
  );
};

export default ProductCard;
