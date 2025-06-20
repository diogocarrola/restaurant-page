import loadHome from './modules/home';
import loadMenu from './modules/menu';
import loadContact from './modules/contact';

// Helper to set up event listeners for nav buttons
function setupNav() {
  document.getElementById('home-btn').addEventListener('click', loadHome);
  document.getElementById('menu-btn').addEventListener('click', loadMenu);
  document.getElementById('contact-btn').addEventListener('click', loadContact);
}

// Initial page load
loadHome();
setupNav();