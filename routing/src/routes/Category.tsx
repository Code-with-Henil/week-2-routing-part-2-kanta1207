// src/routes/Category.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: '1', name: 'Product 1' },
  { id: '2', name: 'Product 2' },
  { id: '3', name: 'Product 3' },
];

export const Category = () => {
  const { categoryId } = useParams<{ categoryId: string }>();

  // Filter products based on the categoryId
  const categoryProducts = products.filter(
    (product) => product.id === categoryId
  );

  return (
    <div>
      <h2>Products in this Category</h2>
      <ul>
        {categoryProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};
