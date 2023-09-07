import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  
  // A utility function to parse query parameters from the URL.
  function useQuery() {
    return new URLSearchParams(location.search);
  }

  const query = useQuery();
  let category = query.get('category'); // This will get the category value from the URL

  // Converts URL-friendly category to API format
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
          // If there's a category query parameter, filter the products
          setProducts(data.filter(product => product.category === category));
        } else {
          // Otherwise, set all products
          setProducts(data);
        }
      });
  }, [category]);

  return (
    <div>
      <h1>{category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products` : 'All Products'}</h1>
      <div>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
