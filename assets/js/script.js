const cards = document.querySelectorAll('.product-card');

cards.forEach((card, index) => {
  card.classList.add('fade-in');
  card.style.transitionDelay = `${index * 0.1}s`;
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

cards.forEach(card => {
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