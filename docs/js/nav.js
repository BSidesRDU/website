const open = false;
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.main-menu');
const menuLinks = document.querySelectorAll('.menu-link');

const toggleClass = (element, className, otherClassName) => {
  element.classList.toggle(className);
  if (otherClassName) {
    element.classList.toggle(otherClassName);
  }
};

const toggleMenu = () => {
  toggleClass(hamburger, 'open');
  toggleClass(menu, 'main-menu__open', 'main-menu__closed');
};

const maybeToggleMenu = () => {
  if (!hamburger.classList.contains('open')) {
    return;
  }
  toggleMenu();
};

hamburger.addEventListener('click', toggleMenu);
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', maybeToggleMenu);
});
