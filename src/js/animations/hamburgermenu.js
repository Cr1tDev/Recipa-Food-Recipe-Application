const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navigation-links');
const contactBtn = document.querySelector('.contact-container');
const navbar = document.querySelector('.navbar');

// Animate Hamburger into X
hamburger.addEventListener('click', () => {
  navbar.classList.toggle('color-active');
  navLinks.classList.toggle('active');
  contactBtn.classList.toggle('active');

  hamburger.classList.toggle('open');
});
