import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 
import ProductCard from './ProductCard';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState(''); // State to track sort order
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
        let filteredData = category ? data.filter(product => product.category === category) : data;

        // Implement the sorting here
        if (sortOrder === 'low-to-high') {
          filteredData.sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'high-to-low') {
          filteredData.sort((a, b) => b.price - a.price);
        }

        setProducts(filteredData);
      });
  }, [category, sortOrder]);

  return (
    <div>
      <h1>{category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products` : 'All Products'}</h1>
      
      {/* Dropdown menu for sorting */}
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="">Sort by price...</option>
        <option value="low-to-high">Low to High</option>
        <option value="high-to-low">High to Low</option>
      </select>

      <div>
        {products.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
