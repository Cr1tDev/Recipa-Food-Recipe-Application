const CATEGORIES = ['breakfast', 'lunch', 'dessert', 'side'];

export const model = {
  state: {
    recipes: [],
    currentRecipe: null,
    searchResults: [],
    categories: CATEGORIES,
    loading: false,
    error: null,
  },
};
