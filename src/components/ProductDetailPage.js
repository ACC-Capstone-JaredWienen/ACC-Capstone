// ProductDetailPage.js
import React, { useState, useEffect } from 'react';
import { useAppState } from './AppStateContext';

const ProductDetailPage = (props) => {
  const [product, setProduct] = useState(null);
  const { addToCart } = useAppState();

  useEffect(() => {
    const productId = props.match.params.id;

    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [props.match.params.id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product.id)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetailPage;
