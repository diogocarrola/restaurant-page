import './style.css';
import loadHome from './modules/home';
import loadMenu from './modules/menu';
import loadContact from './modules/contact';

function animateContent() {
  const content = document.getElementById('content');
  content.style.animation = 'none';
  // Force reflow
  void content.offsetWidth;
  content.style.animation = '';
}

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
    animateContent();
  });
  document.getElementById('menu-btn').addEventListener('click', () => {
    loadMenu();
    setActiveButton('menu-btn');
    animateContent();
  });
  document.getElementById('contact-btn').addEventListener('click', () => {
    loadContact();
    setActiveButton('contact-btn');
    animateContent();
  });
}

// Initial page load
loadHome();
setActiveButton('home-btn');
setupNav();
animateContent();