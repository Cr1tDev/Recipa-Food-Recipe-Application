import heroImg from 'url:../../assets/hero-img.webp';
import heroLazyImg from 'url:../../assets/hero-lazy.webp';
import beccaImg from 'url:../../assets/about-background.webp';
import beccaLazyImg from 'url:../../assets/about-background-lazy.webp';

// Simple helper to safely set image sources
function safeSetImage(selector, lazySrc, dataSrc) {
  const el = document.querySelector(selector);
  if (!el) return; // stop if element doesn't exist
  el.src = lazySrc;
  el.dataset.src = dataSrc;
}

// Apply safely (only if elements exist)
safeSetImage('.hero-img', heroLazyImg, heroImg);
safeSetImage('.about-img', beccaLazyImg, beccaImg);

const imgTarget = document.querySelectorAll('img[data-src]');

const loadingImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.add('loaded');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadingImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTarget.forEach(img => imgObserver.observe(img));
