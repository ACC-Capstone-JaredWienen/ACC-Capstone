import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppState } from './AppStateContext'; // Import the context to use the addToCart function

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useAppState();  // Destructure the addToCart function from context

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product.id)}>Add to Cart</button> {/* Add to Cart button */}
    </div>
  );
};

export default ProductDetailPage;
