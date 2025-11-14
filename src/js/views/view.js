class View {
  _categoriesContainer = null;

  // Initialization
  initGetElement() {
    this._categoriesContainer = document.querySelector('.categories');
  }

  // Render Category Elements
  renderCategories(categories) {
    if (!this._categoriesContainer) return;

    const categoryIcons = {
      breakfast:
        'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c089/6502e2d1ff8db94df5297188_icons8-bread-240.png',
      lunch:
        'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c089/6502e2f3fbcadab05d250a8b_icons8-pizza-240.png',
      side: 'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c089/6502e314a55677b935bd3113_icons8-the-toast-240.png',
      dessert:
        'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c089/6502e33c6ae3d69baf126f5a_icons8-cake-240.png',
    };

    const markup = categories
      .map(
        cat => `
        <article class="category-card">
          <a
            href="/recipe-categories/${cat}"
            class="category-card__link"
            data-link
          >
            <img
              class="category-card__icon"
              src="${categoryIcons[cat.toLowerCase()]}"
              alt="${cat} icon"
              width="60"
              height="60"
            />
            <h3 class="category-card__title">${
              cat.charAt(0).toUpperCase() + cat.slice(1)
            }</h3>
          </a>
        </article>
      `
      )
      .join('');

    this._categoriesContainer.innerHTML = markup;
  }
}

export default new View();
