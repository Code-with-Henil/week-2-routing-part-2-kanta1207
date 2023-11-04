import React from 'react';
import { useParams } from 'react-router-dom';

export const Recipe = () => {
  const { id } = useParams<{ id: string }>();
  const recipeDetails = {
    title: 'Recipe Title',
    description: 'Recipe Description',
  };

  return (
    <div>
      <h2>{recipeDetails.title}</h2>
      <p>{recipeDetails.description}</p>
    </div>
  );
};
