import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [category, setCategory] = useState("");

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

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        let filteredData = data;

        if (category) {
          filteredData = filteredData.filter(product => product.category === getCategoryForAPI(category));
        }

        if (minPrice) {
          filteredData = filteredData.filter(product => product.price >= minPrice);
        }

        if (maxPrice) {
          filteredData = filteredData.filter(product => product.price <= maxPrice);
        }

        if (sortOrder === 'low-to-high') {
          filteredData.sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'high-to-low') {
          filteredData.sort((a, b) => b.price - a.price);
        }

        setProducts(filteredData);
      });
  }, [category, sortOrder, minPrice, maxPrice]);

  return (
    <div>
      <h1>{category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products` : 'All Products'}</h1>

      {/* Filtering UI */}
      <div>
        <label>
          Category: 
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">All</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelry</option>
            <option value="mens-clothing">Men's Clothing</option>
            <option value="womens-clothing">Women's Clothing</option>
          </select>
        </label>

        <label>
          Min Price:
          <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
        </label>

        <label>
          Max Price:
          <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
        </label>
      </div>

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
