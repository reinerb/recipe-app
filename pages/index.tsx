import RecipeDisplay from '@/components/RecipeDisplay';
import PrimaryLayout from '@/components/layouts/PrimaryLayout';

const sampleRecipe = {
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
      <RecipeDisplay recipe={sampleRecipe} />
    </PrimaryLayout>
  );
}
