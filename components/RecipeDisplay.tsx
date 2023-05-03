import React from 'react';
import type { Recipe } from '@/types/Recipe';

interface Props {
  recipe: Recipe;
}

function RecipeDisplay(props: Props) {
  const { title, servings, description, ingredients, steps, notes } =
    props.recipe;

  return (
    <article>
      <section
        id='top-matter'
        className='flex flex-col md:flex-row md:items-end md:justify-between'
      >
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p>Servings: {servings}</p>
      </section>
      <section
        id='description'
        className='mt-4'
      >
        {description}
      </section>
      <section
        id='ingredients'
        className='mt-4'
      >
        <h2 className='text-xl font-semibold'>Ingredients</h2>
        <ul className='ml-6 mt-1 list-disc'>
          {ingredients.map((ingredient, index) => (
            <li key={`ingredient ${index + 1}`}>{ingredient}</li>
          ))}
        </ul>
      </section>
      <section
        id='steps'
        className='mt-4'
      >
        <h2 className='text-xl font-semibold'>Recipe Steps</h2>
        <ol className='ml-6 mt-1 list-decimal'>
          {steps.map((step, index) => (
            <li key={`step ${index + 1}`}>{step}</li>
          ))}
        </ol>
      </section>
      <section
        id='notes'
        className='mt-4'
      >
        <h2 className='text-xl font-semibold'>Notes</h2>
        <ul className='ml-6 mt-1 list-disc'>
          {notes.map((note, index) => (
            <li key={`note ${index + 1}`}>{note}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default RecipeDisplay;
