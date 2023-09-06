import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const query = useQuery();
  const category = query.get("category");

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        if (category) {
          setProducts(data.filter(product => product.category === category));
        } else {
          setProducts(data);
        }
      });
  }, [category]);

  return (
    <div>
      <h1>{category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products` : "All Products"}</h1>
      <div>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
