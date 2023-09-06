import React from 'react';

function CategoryFilter() {
  const categories = ['Electronics', 'Clothing', 'Home & Kitchen', 'Books', 'Toys'];

  return (
    <div className="category-filter">
      <h3>Filter by Category:</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <a href={`/products?category=${category}`}>{category}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryFilter;
