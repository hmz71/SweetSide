const cards = document.querySelectorAll(
  '.product-card, .univers__card, .tiramisu__row, .social__link, .contact__info, .brownie__special, .modalite__bloc'
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

const burger = document.getElementById('burger');
const navList = document.querySelector('.navbar__list');

if (burger) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navList.classList.toggle('open');
  });
}

const dropdownItems = document.querySelectorAll('.navbar__item--dropdown');

dropdownItems.forEach(item => {
  const link = item.querySelector('.navbar__link--dropdown');
  if (link) {
    const toggleDropdown = (e) => {
      e.preventDefault();
      e.stopPropagation();

      const isAlreadyOpen = item.classList.contains('open');
      dropdownItems.forEach(i => i.classList.remove('open'));

      if (!isAlreadyOpen) {
        item.classList.add('open');
      }
    };

    if ('ontouchstart' in window) {
      link.addEventListener('touchend', toggleDropdown);
    } else {
      link.addEventListener('click', toggleDropdown);
    }
  }
});