import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
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
          <Link to={`/products/${product.id}`} key={product.id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
