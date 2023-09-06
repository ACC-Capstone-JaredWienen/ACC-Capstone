import React, { useState, useEffect } from 'react';

const ProductDetailPage = (props) => {
  const [product, setProduct] = useState(null);

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
      {/* Add to cart button and other controls can go here */}
    </div>
  );
};

export default ProductDetailPage;
