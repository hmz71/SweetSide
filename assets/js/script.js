const cards = document.querySelectorAll(
  '.product-card, .univers__card, .tiramisu__row, .social__link, .contact__info, .brownie__special'
);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

cards.forEach(card => {
  card.classList.add('fade-in');
  card.style.transitionDelay = '0s';
  observer.observe(card);
});

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});