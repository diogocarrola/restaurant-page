import './style.css';
import loadHome from './modules/home';
import loadMenu from './modules/menu';
import loadContact from './modules/contact';

function setActiveButton(id) {
  document.querySelectorAll('nav button').forEach(btn => {
    btn.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

function setupNav() {
  document.getElementById('home-btn').addEventListener('click', () => {
    loadHome();
    setActiveButton('home-btn');
  });
  document.getElementById('menu-btn').addEventListener('click', () => {
    loadMenu();
    setActiveButton('menu-btn');
  });
  document.getElementById('contact-btn').addEventListener('click', () => {
    loadContact();
    setActiveButton('contact-btn');
  });
}

// Initial page load
loadHome();
setActiveButton('home-btn');
setupNav();