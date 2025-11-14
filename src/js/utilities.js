export const ingredientImageUrl = name =>
  name
    ? `https://www.themealdb.com/images/ingredients/${encodeURIComponent(
        name
      )}.png`
    : null;

// Fix the ingredients format
export const buildIngredients = meal => {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ing = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ing && ing.trim()) {
      ingredients.push({
        name: ing.trim(),
        measure: (measure || '').trim(),
        image: ingredientImageUrl(ing.trim()),
      });
    }
  }

  return ingredients;
};

// Convert the data structor based on my application format
export const mapMealToRecipe = meal => {
  if (!meal) return null;

  return {
    id: meal.idMeal,
    title: meal.strMeal,
    image: meal.strMealThumb || FALLBACK_IMAGE,
    category: meal.strCategory.toLowerCase() || null,
    area: meal.strArea || null,
    description: meal.strMeal
      ? `${meal.strMeal} is a delicious dish from ${
          meal.strArea || 'unknown origin'
        }.`
      : 'No description available.',
    instructions: meal.strInstructions || 'No instructions available.',
    ingredients: buildIngredients(meal),
  };
};
