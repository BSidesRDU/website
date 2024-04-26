const open = false;

const hamburger = document.querySelector('#hamburger');
const hamburgerClosed = document.querySelector('#hamburger-closed');
const hamburgerOpen = document.querySelector('#hamburger-open');

const mobileMenu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelectorAll('.menu-link');

const toggleClass = (element, ...classNames) => {
  classNames.forEach((className) => {
    element.classList.toggle(className);
  })
};

const toggleMenu = () => {
  toggleClass(hamburgerClosed, 'block', 'hidden');
  toggleClass(hamburgerOpen, 'block', 'hidden');
  toggleClass(mobileMenu, 'block', 'hidden')
};

hamburger.addEventListener('click', toggleMenu);

const maybeCloseMenu = () => {
  if (!mobileMenu.classList.contains('block')) {
    return;
  }
  toggleMenu();
};

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', maybeCloseMenu);
});

window.addEventListener('load', () => {
  if (open) {
    toggleMenu();
  }
})
