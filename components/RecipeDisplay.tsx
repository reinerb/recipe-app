import React from 'react';
import type { Recipe } from '@/types/Recipe';

interface Props {
  recipe: Recipe;
}

function RecipeDisplay(props: Props) {
  const { title, servings, description, ingredients, steps, notes } =
    props.recipe;

  return <article>This is a recipe</article>;
}

export default RecipeDisplay;
