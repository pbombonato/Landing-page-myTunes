const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') { event.preventDefault(); }

  const menuMobile = document.getElementById('menu-mobile');
  menuMobile.classList.toggle('active');

  const menu = document.getElementById('menu');
  menu.classList.toggle('active');

  menuMobile.addEventListener('click', toggleMenu)
  menuMobile.removeEventListener('touchstart', toggleMenu)
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);