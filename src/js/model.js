import { fetchWithTimeout, setLoading, setError } from './helpers.js';
import { mapMealToRecipe, buildIngredients } from './utilities.js';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1'; //API
const CATEGORIES = ['breakfast', 'lunch', 'dessert', 'side'];

// Oject model
export const model = {
  state: {
    recipes: [],
    currentRecipe: null,
    searchResults: [],
    categories: CATEGORIES,
    loading: false,
    error: null,
  },

  async loadRandomRecipes(number = 4) {
    try {
      // Set loading state to true
      setLoading(this, true);

      const results = [];

      // Fetch and push each data to results array
      for (let i = 0; i < number; i++) {
        const json = await fetchWithTimeout(`${BASE_URL}/random.php`);
        if (json?.meals?.[0]) results.push(mapMealToRecipe(json.meals[0]));
      }

      // Updates the state by storing new recipe data
      this.state.recipes = results;
    } catch (error) {
      // Erro handling
      setError(this, error.message);
      throw error;
    } finally {
      // Set loading state to true
      setLoading(this, false);
    }
  },
};
