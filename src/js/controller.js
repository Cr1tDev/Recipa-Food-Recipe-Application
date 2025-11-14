import featuredView from './views/featuredView.js';
import view from './views/view.js';
import { model } from './model.js';

export const init = function () {
  view.initGetElement();
  view.renderCategories(model.state.categories);
  featuredView.render();
};
