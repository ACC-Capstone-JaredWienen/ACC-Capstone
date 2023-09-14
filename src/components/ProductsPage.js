import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Removed Link from imports
import ProductCard from './ProductCard';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  function useQuery() {
    return new URLSearchParams(location.search);
  }

  const query = useQuery();
  let category = query.get('category');

  const getCategoryForAPI = (categorySlug) => {
    switch (categorySlug) {
      case 'mens-clothing':
        return "men's clothing";
      case 'womens-clothing':
        return "women's clothing";
      default:
        return categorySlug;
    }
  };
  category = getCategoryForAPI(category);

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
      <h1>{category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products` : 'All Products'}</h1>
      <div>
        {products.map(product => (
          // Removed the Link wrapper
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
