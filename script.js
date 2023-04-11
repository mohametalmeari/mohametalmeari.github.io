const menuContainer = document.getElementById('menu_container');
const hamburger = document.getElementById('menu_icon');
const xMenu = document.getElementById('x-menu');
const menuLink = document.querySelectorAll('.menu-link');

hamburger.addEventListener('click', () => {
  menuContainer.style.display = 'block';
});

xMenu.addEventListener('click', () => {
  menuContainer.style.display = 'none';
});

for (let i = 0; i < menuLink.length; i += 1) {
  menuLink[i].addEventListener('click', () => {
    menuContainer.style.display = 'none';
  });
}
