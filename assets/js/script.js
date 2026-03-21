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

document.addEventListener('click', () => {
  dropdownItems.forEach(i => i.classList.remove('open'));
});

const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle ? themeToggle.querySelector('i') : null;

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
      localStorage.setItem('theme', 'dark');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
      localStorage.setItem('theme', 'light');
    }
  });

  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }
}

const brunchHeaders = document.querySelectorAll('.brunch__header');

brunchHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const card = header.parentElement;
    const isOpen = card.classList.contains('open');
    document.querySelectorAll('.brunch__card').forEach(c => c.classList.remove('open'));
    if (!isOpen) {
      card.classList.add('open');
    }
  });
});