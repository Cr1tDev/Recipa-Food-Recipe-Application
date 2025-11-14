import heroImg from 'url:../../assets/hero-img.webp';
import heroLazyImg from 'url:../../assets/hero-lazy.webp';
import beccaImg from 'url:../../assets/about-background.webp';
import beccaLazyImg from 'url:../../assets/about-background-lazy.webp';

/* Assign lazy + real images */
function setLazyImage(selector, placeholderSrc, finalSrc) {
  const img = document.querySelector(selector);
  if (!img) return;

  img.src = placeholderSrc; // Low-res placeholder
  img.dataset.src = finalSrc; // High-res image for lazy loading
}

/* Assign images (safe even if element missing) */
setLazyImage('.hero-img', heroLazyImg, heroImg);
setLazyImage('.about-img', beccaLazyImg, beccaImg);

/* Lazy Loading Logic using IntersectionObserver */
const imagesToLoad = document.querySelectorAll('img[data-src]');

function onImageIntersect(entries, observer) {
  const entry = entries[0];

  // If image is not in the viewport yet → stop
  if (!entry.isIntersecting) return;

  const img = entry.target;

  // Swap low-res → high-res
  img.src = img.dataset.src;

  // Add loaded class AFTER full load
  img.addEventListener('load', () => {
    img.classList.add('loaded');
  });

  // Stop observing once loaded
  observer.unobserve(img);
}

const imageObserver = new IntersectionObserver(onImageIntersect, {
  root: null,
  threshold: 0,
  rootMargin: '200px', // 200px before the image enters screen
});

// Attach observer to each image
imagesToLoad.forEach(img => imageObserver.observe(img));
