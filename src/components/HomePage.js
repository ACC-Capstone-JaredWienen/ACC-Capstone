import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/index.css';  // Assuming your styles are in this path

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        // Randomly select 6 products
        const randomProducts = [];
        while (randomProducts.length < 6) {
          const randomIndex = Math.floor(Math.random() * data.length);
          const product = data[randomIndex];
          if (!randomProducts.includes(product)) {
            randomProducts.push(product);
          }
        }
        setProducts(randomProducts);
      });
  }, []);

  return (
    <div className="home-container">
      <h1>Welcome to our Online Store!</h1>
      <p>Featured Products:</p>
      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <Link to={`/products/${product.id}`}>
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
