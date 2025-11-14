import featuredView from './views/featuredView.js';
import view from './views/view.js';
import { model } from './model.js';

// Handle the random recipe
const controlLoadRandomRecipes = async function () {
  try {
    view.renderLoader();
    await model.loadRandomRecipes(6); // recipe count
    view.renderRecipes(model.state.recipes);
  } catch (error) {
    console.error(error);
    view.renderError();
  }
};

export const init = function () {
  view.initGetElement();
  view.renderCategories(model.state.categories);
  featuredView.render();

  // Load homepage recipes
  controlLoadRandomRecipes();
};
