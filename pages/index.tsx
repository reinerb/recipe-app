import RecipeDisplay from '@/components/RecipeDisplay';
import PrimaryLayout from '@/components/layouts/PrimaryLayout';
import { v4 as uuid } from 'uuid';

const sampleRecipe = {
  id: uuid(),
  title: 'Tolfredo',
  servings: 4,
  description: 'Crispy tofu and roasted broccoli with alfredo sauce',
  ingredients: ['Tofu', 'Broccoli', 'Alfredo Sauce'],
  steps: [
    'Make crispy tofu',
    'Roast broccoli',
    'Warm alfredo sauce',
    'Combine',
  ],
  notes: ['Tofu can be cubed or torn up.'],
};

export default function Home() {
  return (
    <PrimaryLayout pageTitle='Recipe App'>
      <RecipeDisplay
        key={sampleRecipe.id}
        recipe={sampleRecipe}
      />
    </PrimaryLayout>
  );
}
